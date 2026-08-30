# EvoMesh documentation

This repository contains the static source for [evomesh.devart.solutions](https://evomesh.devart.solutions), the documentation site for [EvoMesh](https://github.com/Dev-Art-Solutions/EvoMesh).

There is no build step. Primary navigation and documentation content live in `src/index.html`; CSS, JavaScript, images, and locally stored vendor files live under `src/assets/`. The layout follows the same static documentation family as the InferHub documentation while using EvoMesh-specific content, logo, and accent colors.

## Local preview

From the repository root:

```bash
python -m http.server 8080 --directory src
```

Then open `http://localhost:8080`. Any equivalent static file server works.

## Editing

- Update sidebar links and their matching section IDs together in `src/index.html`.
- Keep examples synchronized with the real EvoMesh CLI and configuration.
- Put images in `src/assets/images/` and use repository-local URLs.
- Do not describe planned or experimental behavior as complete.

## Deployment

Publish the contents of `src/` as the site root. No generated output directory is needed.

## Related repositories

- [EvoMesh](https://github.com/Dev-Art-Solutions/EvoMesh)
- [InferHub](https://github.com/Dev-Art-Solutions/InferHub), an optional local/self-hosted model provider
- [InferHub documentation](https://inferhub.devart.solutions)

## License

MIT. See [LICENSE](LICENSE).

