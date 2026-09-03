/* EvoMesh documentation behaviour.
 *
 * Everything here is progressive enhancement: with JavaScript disabled the page
 * is still a complete, readable, navigable document. Nothing below adds
 * content, it only makes an existing long document easier to move around in.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- theme */

  var STORAGE_KEY = "evomesh-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      var dark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", dark ? "Switch to light parchment" : "Switch to dark drafting desk");
      toggle.querySelectorAll("[data-theme-icon]").forEach(function (icon) {
        icon.hidden = icon.getAttribute("data-theme-icon") !== (dark ? "dark" : "light");
      });
    }
  }

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null; // private windows and blocked site data are not errors here
    }
  }

  applyTheme(storedTheme() || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (error) {
        /* preference simply does not persist */
      }
    });
  }

  /* ------------------------------------------------------------- index */

  var article = document.querySelector("[data-article]");

  /* A section owns its id, and its <h2> is the title of that id. Collecting
   * the pair (rather than only headings that carry an id themselves) is what
   * keeps section titles in the search index (below). querySelectorAll
   * returns document order, so a section always precedes its own
   * subheadings. There used to be a second, right-hand "on this page" list
   * built from this same data -- removed, because the left rail already
   * shows every section's own subheadings expanded, so a second column
   * scoped to "whichever section you're in" only ever repeated exactly the
   * portion of the left rail already on screen. */
  var headings = [];
  if (article) {
    article.querySelectorAll("[data-section], h3[id]").forEach(function (node) {
      if (node.hasAttribute("data-section")) {
        var title = node.querySelector("h2");
        if (title && node.id) {
          headings.push({ el: title, id: node.id, level: 2, text: title.textContent.trim() });
        }
      } else {
        headings.push({ el: node, id: node.id, level: 3, text: node.textContent.trim() });
      }
    });
  }

  /* Highlight the heading currently being read in the index.
   * IntersectionObserver alone is jumpy on long sections, so the nearest
   * heading above the reading line wins. */
  var indexLinks = Array.prototype.slice.call(document.querySelectorAll("[data-index] a[href^='#']"));

  function markCurrent(links, id) {
    links.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + id;
      if (match) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
  var ticking = false;

  function syncPosition() {
    ticking = false;
    var line = window.scrollY + window.innerHeight * 0.28;

    var activeSection = sections.length ? sections[0] : null;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top + window.scrollY <= line) {
        activeSection = section;
      }
    });
    if (activeSection) {
      markCurrent(indexLinks, activeSection.id);
    }

    var top = document.querySelector("[data-back-to-top]");
    if (top) {
      top.setAttribute("data-visible", String(window.scrollY > 900));
    }
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(syncPosition);
      }
    },
    { passive: true }
  );
  syncPosition();

  /* --------------------------------------------------------- copy code */

  var COPY_ICON =
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 1.5A1.5 1.5 0 0 1 5.5 0h6A1.5 1.5 0 0 1 13 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 4 10.5v-9Zm1.5-.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-6Z"/><path d="M2 4.5A1.5 1.5 0 0 1 3 3.086V13.5a.5.5 0 0 0 .5.5h7.414A1.5 1.5 0 0 1 9.5 15h-6A1.5 1.5 0 0 1 2 13.5v-9Z"/></svg>';
  var DONE_ICON =
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 3.5 6 11 2.5 7.5l1-1L6 9l6.5-6.5 1 1Z"/></svg>';

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.innerHTML = COPY_ICON + "<span>Copy</span>";
    button.addEventListener("click", function () {
      var block = button.closest(".ev-code");
      var code = block && block.querySelector("code");
      if (!code) {
        return;
      }
      var finish = function (ok) {
        button.innerHTML = (ok ? DONE_ICON : COPY_ICON) + "<span>" + (ok ? "Copied" : "Press Ctrl+C") + "</span>";
        button.setAttribute("data-copied", String(ok));
        window.setTimeout(function () {
          button.innerHTML = COPY_ICON + "<span>Copy</span>";
          button.removeAttribute("data-copied");
        }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code.innerText).then(
          function () { finish(true); },
          function () { finish(false); }
        );
      } else {
        // No clipboard API (or an insecure origin): select the text so the
        // reader can still copy it themselves rather than getting nothing.
        var range = document.createRange();
        range.selectNodeContents(code);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        finish(false);
      }
    });
  });

  /* ------------------------------------------------------------ search */

  var dialog = document.querySelector("[data-search-dialog]");
  var input = document.querySelector("[data-search-input]");
  var results = document.querySelector("[data-search-results]");

  if (dialog && input && results && typeof dialog.showModal === "function") {
    // The site is a single document, so the search index is just its headings.
    var entries = headings.map(function (entry) {
      var section = entry.el.closest("[data-section]");
      var sectionTitle = section ? section.querySelector("h2") : null;
      var body = section ? section.textContent : entry.text;
      return {
        id: entry.id,
        title: entry.text,
        context: sectionTitle && entry.level === 3 ? sectionTitle.textContent.trim() : "Notebook",
        haystack: (entry.text + " " + body).toLowerCase()
      };
    });

    var render = function (query) {
      var needle = query.trim().toLowerCase();
      var matched = needle
        ? entries.filter(function (entry) { return entry.haystack.indexOf(needle) !== -1; })
        : entries;
      results.innerHTML = "";
      if (!matched.length) {
        var empty = document.createElement("li");
        empty.className = "ev-results-empty";
        empty.textContent = "Nothing in the notebook matches that.";
        results.appendChild(empty);
        return;
      }
      matched.slice(0, 20).forEach(function (entry) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#" + entry.id;
        link.innerHTML = "";
        link.appendChild(document.createTextNode(entry.title));
        var small = document.createElement("small");
        small.textContent = entry.context;
        link.appendChild(small);
        link.addEventListener("click", function () { dialog.close(); });
        item.appendChild(link);
        results.appendChild(item);
      });
    };

    var open = function () {
      render("");
      dialog.showModal();
      input.value = "";
      input.focus();
    };

    document.querySelectorAll("[data-search-open]").forEach(function (button) {
      button.addEventListener("click", open);
    });

    input.addEventListener("input", function () { render(input.value); });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        var first = results.querySelector("a");
        if (first) {
          event.preventDefault();
          first.click();
        }
      }
    });

    document.addEventListener("keydown", function (event) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName) || event.target.isContentEditable;
      if ((event.key === "k" || event.key === "K") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        open();
      } else if (event.key === "/" && !typing && !dialog.open) {
        event.preventDefault();
        open();
      }
    });
  } else if (dialog) {
    // <dialog> unsupported: send the button to the index instead of nowhere.
    document.querySelectorAll("[data-search-open]").forEach(function (button) {
      button.setAttribute("hidden", "hidden");
    });
  }

  /* ------------------------------------------------- heading anchors */

  headings.forEach(function (entry) {
    if (entry.el.querySelector(".ev-anchor")) {
      return;
    }
    var anchor = document.createElement("a");
    anchor.className = "ev-anchor";
    anchor.href = "#" + entry.id;
    anchor.setAttribute("aria-label", "Link to this section");
    anchor.textContent = "#";
    entry.el.appendChild(anchor);
  });

  /* ------------------------------------- draw-in for the hero plate */

  if (!reduceMotion && "IntersectionObserver" in window) {
    var plates = document.querySelectorAll("[data-draw]");
    var observer = new IntersectionObserver(
      function (records) {
        records.forEach(function (record) {
          if (record.isIntersecting) {
            record.target.animate(
              [
                { opacity: 0, transform: "translateY(10px)" },
                { opacity: 1, transform: "none" }
              ],
              { duration: 620, easing: "cubic-bezier(.2,.7,.3,1)", fill: "both" }
            );
            observer.unobserve(record.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    plates.forEach(function (plate) { observer.observe(plate); });
  }
})();
