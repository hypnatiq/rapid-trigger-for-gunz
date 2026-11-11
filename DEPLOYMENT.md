# Deployment Guide

## GitHub repository

1. Use `hypnatiq/rapid-trigger-for-gunz` as the public source repository.
2. Keep the complete repository root together, including `.nojekyll` and every file referenced by the HTML.
3. Review the commit diff before publishing or copying the source to another deployment repository.
4. If GitHub Pages is enabled elsewhere, serve from the repository root or a dedicated Pages branch without a build command.
5. Confirm `index.html`, `research-notebook.html`, `hanz-fgunz-settings.html`, `hanz-archive-vault.html`, and `rapid-trigger-cycle-tester.html` load directly.

## Netlify relationship

The current public-site address is `https://gunz-rt.netlify.app/`. The Netlify package and this source repository can contain deployment-specific differences. Compare the intended files and active asset references before replacing either package.

## Post-deployment validation

- Confirm the displayed release is Revision 2.7.
- Test navigation, theme control, definitions, image viewer, translations, saved reading position, and cycle tester.
- Test at desktop, tablet, and phone widths.
- Confirm no horizontal page overflow except inside intentionally scrollable tables.
- Confirm the live-site link and all external references open correctly.
