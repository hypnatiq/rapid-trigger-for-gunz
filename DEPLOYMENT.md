# Deployment Guide

## GitHub repository

1. Open [`hypnatiq/rapid-trigger-for-gunz`](https://github.com/hypnatiq/rapid-trigger-for-gunz).
2. Upload the contents of the GitHub-ready folder to the repository root. This package is intentionally flat and includes `.nojekyll`.
3. Review the complete commit diff before committing.
4. Confirm `README.md`, `index.html`, `research-notebook.html`, and `rapid-trigger-cycle-tester.html` are present at the repository root.
5. Deploy the separate Netlify-ready package when the public site should receive the same update.

## Netlify relationship

The current public site is `https://gunz-rt.netlify.app/`. The Netlify package has deployment-specific files and uses `crosshair2.png`; the GitHub package uses `.nojekyll` and `crosshair2-green.png`. Do not replace one package with the other without comparing those intended differences.

## Post-deployment validation

- Confirm the displayed release is Revision 2.7.
- Test navigation, theme control, definitions, image viewer, translations, saved reading position, and cycle tester.
- Test at desktop, tablet, and phone widths.
- Confirm no horizontal page overflow except inside intentionally scrollable tables.
- Confirm the live-site link and all external references open correctly.
