# Rapid Trigger for GunZ

A community-focused research and tuning guide I built to help new and experienced GunZ: The Duel players understand how Hall-effect Rapid Trigger settings affect movement.

**Live guide:** https://gunz-rt.netlify.app/

Most Rapid Trigger advice starts with a preset. I wanted a method I could repeat and explain. This project changes one setting at a time, records what happened, keeps failed checkpoints, and separates manufacturer-documented behavior from my own GunZ testing.

## Community purpose and Masangsoft review

I built this as a community resource, not a universal preset. The goal is to give new and experienced players a controlled way to tune their keyboard around movement they already know, then validate the result in Training Room and real matches.

On October 10, 2026, I submitted the guide to Masangsoft for consideration as an official or licensed community resource. Masangsoft confirmed that the proposal was forwarded to the relevant department for internal review.

This is not an approval, license, endorsement, or partnership. The review is still pending.

## What is included

- A responsive Rapid Trigger guide written around GunZ movement
- A chronological Research Notebook showing how the settings changed and why
- An interactive JavaScript Cycle Tester for actuation, RT A, and RT D
- Current Wootility screenshots and the crosshair used during testing
- Troubleshooting routes that connect a repeated symptom to the first setting worth checking

## Current tested checkpoints

- Controlled restart point: 1.20 mm actuation, 0.60 mm RT A, 0.55 mm RT D
- New-baseline training result: 1.20 mm actuation, 0.80 mm RT A, 0.30 mm RT D
- Latest FGunz result: 1.20 mm actuation, 0.35 mm RT A, 0.15 mm RT D

These values are my personal test records, not universal presets. They describe key travel in millimeters, not timing in milliseconds.

## How I test

1. Set actuation with Rapid Trigger turned off.
2. Test RT A while keeping RT D unchanged.
3. Adjust RT D only after consecutive movement is working and the same release symptom repeats.
4. Recheck RT A after an RT D change, then recheck RT D after an RT A change.
5. Keep sensitivity and the rest of the environment fixed while testing one change.
6. Validate movement, aiming, character control, and enemy pace in GunZ instead of treating a desktop input result as final proof.

One GunZ dash uses two presses of the same direction. Actuation starts the first press, RT D controls the release between presses, and RT A controls how far the key must move down again before the next press is recognized. The public tuning order follows the order that is easiest to test, which is different from the physical key-cycle order.

## Main files

- [`index.html`](index.html): the public guide, tuning order, troubleshooting routes, and Cycle Tester entry point
- [`research-notebook.html`](research-notebook.html): the chronological test record, current result, screenshots, references, and evidence limits
- [`rapid-trigger-cycle-tester.html`](rapid-trigger-cycle-tester.html): the interactive actuation, RT A, and RT D model
- [`site.css`](site.css) and [`site.js`](site.js): the shared layout and behavior
- [`revision-26-translations.js`](revision-26-translations.js): the translation structure; English is current, while other languages still require fluent review

## Revision 2.6

Revision 2.6 keeps the full guide, Research Notebook, translations, theme controls, definitions, and Cycle Tester. It also corrects mobile return-to-reading behavior and keeps wide tables inside their own horizontal scroll area instead of widening the page.

## Evidence and project boundaries

- Manufacturer sources explain Hall-effect and Rapid Trigger behavior.
- The GunZ tuning order, symptoms, checkpoints, and pass conditions come from personal testing.
- A repeated symptom helps identify which setting to test first. It does not prove that one setting caused every missed input.
- The screenshots show the current 1.20 mm actuation and 0.35 mm RT A / 0.15 mm RT D result.
- GunZ: The Duel, Wooting, CHERRY, Gateron, and other referenced names belong to their respective owners. Their documentation supports definitions; it does not endorse this project.

## GitHub Pages

This is a static site. Keep `.nojekyll` and upload the complete repository contents to the root of `hypnatiq/rapid-trigger-for-gunz`. No framework or build command is required.

See [`LICENSE.md`](LICENSE.md), [`SECURITY.md`](SECURITY.md), and [`DEPLOYMENT.md`](DEPLOYMENT.md) before reuse or publication.
