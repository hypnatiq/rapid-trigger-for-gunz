# Deployment Guide

## GitHub repository

1. Create the repository as `hypnatiq/rapid-trigger-for-gunz`.
2. Upload the complete repository root, including `.nojekyll` and `assets`.
3. Review the commit diff before publishing.
4. If GitHub Pages is enabled, serve from the repository root or a dedicated Pages branch without a build command.
5. Confirm `index.html`, `research-notebook.html`, and `rapid-trigger-cycle-tester.html` load directly.

## Netlify relationship

The current public site is `https://gunz-rt.netlify.app/`. The Netlify package has deployment-specific files and uses `crosshair2.png`; the GitHub package uses `.nojekyll` and `crosshair2-green.png`. Do not replace one package with the other without comparing those intended differences.

## Post-deployment validation

- Confirm the displayed release is Revision 2.7.
- Test navigation, theme control, definitions, image viewer, translations, saved reading position, and cycle tester.
- Test at desktop, tablet, and phone widths.
- Confirm no horizontal page overflow except inside intentionally scrollable tables.
- Confirm the live-site link and all external references open correctly.
