# Rapid Trigger for GunZ

A research-backed, test-driven guide to Hall-effect Rapid Trigger tuning for GunZ: The Duel by Hypnatiq, the public project identity of Hanzley Philippeaux.

**Live guide:** https://gunz-rt.netlify.app/

This repository contains a responsive static guide, a chronological personal research notebook, and an interactive JavaScript cycle tester. It records controlled checkpoints and explains why one setting changed at a time. It does not present Hanz's personal values as universal presets.

## Revision 2.6

Revision 2.6 preserves the complete prior method, navigation, translations,
theme controls, definition panels, and interactive Rapid Trigger Cycle Tester. It fixes
mobile return-to-reading behavior by treating `/` and `/index.html` as the same guide
page. A saved guide position now restores directly instead of first opening the top of
the home page and showing a redundant return prompt.

On phone layouts, the contents button is the first control on the left. The guide and
Research Notebook then stack each slide, card, route, image, and action in reading order
without horizontal page overflow. Wide tables remain inside their own horizontal scroll
area instead of widening the page.

## Current tested checkpoint

- Controlled restart point: 1.20 mm actuation, 0.60 mm RT A, 0.55 mm RT D
- New-baseline training result: 1.20 mm actuation, 0.80 mm RT A, 0.30 mm RT D
- Latest FGunz result: 1.20 mm actuation, 0.35 mm RT A, 0.15 mm RT D

These are Hanz's personal test records. They are not universal presets. The values are
travel distances in millimeters, not timing measurements.

The guide now states the GunZ input model directly: one dash uses two presses of the
same direction. Actuation starts the first press, RT D controls the release between
the presses, and RT A controls how far the key is pressed again before the second or later repeated tap is recognized.
The copy does not spell out direction-key pairs because GunZ players already know them.

The public tuning order is: actuation with Rapid Trigger OFF, RT A while RT D remains
stable, RT D after consecutive movement works, RT A recheck, RT D recheck, then GunZ
validation. This tuning order is intentionally different from the physical key-cycle
order of actuation, RT D release, and RT A re-press.

## What changed in the method

1. Confirm one selected move from standstill at 1.50 mm RT A and 0.55 mm RT D.
2. Lower RT A to 0.60 mm while keeping RT D at 0.55 mm to test consecutive solo movement.
3. Use a repeated late dash to test whether the old input clears cleanly.
4. Lower RT D only when the same release symptom repeats.
5. Add an enemy and keep the current sensitivity fixed before judging in-fight movement.
6. Lower RT A only when the keyboard repeatedly recognizes the next tap too late while aiming.
7. Recheck RT D after RT A changes the movement rhythm.
8. Preserve the earlier 1.50 mm actuation pass as a failed checkpoint because late-dash misses continued.
9. Lower actuation to 1.20 mm and keep the rest of the environment fixed.
10. Restore RT A to 0.60 mm and RT D to 0.55 mm before retuning.
11. Reach 0.80 mm RT A and 0.30 mm RT D in training with good late dashes.
12. Validate full-map movement, character control, aiming, and enemy pace in Clan War first, with Team Deathmatch as another validation mode.

The first Rapid Trigger values, 1.50 mm RT A and 0.55 mm RT D, proved only that a
selected move could be performed from standstill. Moving RT A to 0.60 mm while keeping
RT D at 0.55 mm supported consecutive solo movement. The in-fight pass with the current
sensitivity reached 0.35 mm RT A and 0.15 mm RT D. Late-dash misses still continued at
1.50 mm actuation, so actuation changed to 1.20 mm. RT A and RT D were then reset to
0.60 mm and 0.55 mm before retuning. Training then reached 0.80 mm RT A and 0.30 mm
RT D with good late dashes. Clan War, followed by Team Deathmatch as another validation mode, brought the latest complete
FGunz result to 1.20 mm actuation, 0.35 mm RT A, and 0.15 mm RT D. Hall Duel was not
used as the final proof because most fights there remain mainly left and right.

## Pages and files

- `index.html`: public Rapid Trigger method, tuning order, troubleshooting, evidence,
  GunZ-first quick routes, and the dedicated Cycle Tester launch point.
- `research-notebook.html`: the chronological personal method, current FGunz result,
  seven-stage test timeline, current screenshot record, references, and evidence limits.
- `rapid-trigger-cycle-tester.html`: interactive tester with Training Room,
  Clan War / TDM, user-entered profiles, and a separate Mechanical to Hall Effect
  comparison model. The transition view includes a fixed-point Ducky One 2 mechanical
  example using Cherry MX Red values and a consistency-first Hall Effect model using 2.00 mm actuation, 0.55 mm RT D,
  and 1.80 mm RT A. These example values are not Hanz's personal profile. Calculated travel is
  explained inside each Event History update rather than in a separate math panel.
  Selecting the custom profile marks every empty required value with a red circular
  exclamation point; each marker clears after entry. Completed combinations that cannot
  work display the specific conflicting value and physical boundary over the live diagram.
- `site.css` and `site.js`: shared visual system and site behavior.
- `crosshair2-green.png`: Hanz's supplied 32 × 32 GunZ crosshair in exact
  `#00FF00`, used in FG at size 1.30.
- `revision-26-translations.js`: active translation structure carried forward
  from Revision 2.4. English is the updated source voice; other languages still need
  fluent review before being called final.

## Evidence boundary

- Manufacturer sources explain Hall-effect and Rapid Trigger control behavior.
- GunZ application, tuning order, symptom model, and pass conditions come from
  personal testing.
- The current Wootility screenshots show the 1.20 mm actuation and 0.35 / 0.15 mm
  Rapid Trigger result. Earlier screenshot records are not shown in the notebook.
- The RT A explanation defines the issue as a late second or later repeated press
  disrupting the expected
  firing moment, crosshair timing, and movement-and-aim rhythm, not reduced character speed.
- Active reader-facing copy uses movement language instead of specific directional-key labels.
- Both current Wootility screenshots and the crosshair open in the shared enlarged-image
  viewer. The viewer and crosshair setting provide a direct image download. Colored
  definition buttons also close on a second click.
- A repeated symptom supports which control to test first. It does not prove that one
  setting caused every missed input.
- The Research Notebook records Hanz's current resolution, FOV, camera distance,
  mouse DPI, GunZ sensitivity, and crosshair alongside the keyboard checkpoint.

## GitHub Pages

This is a static site. Upload all files and folders to the root of the
`hypnatiq/rapid-trigger-for-gunz` repository. Keep `.nojekyll` and the complete
`assets` folder. No framework or build command is required.

Revision 2.6 is prepared source until it is committed, pushed, GitHub Pages finishes,
and the live site is checked.

## Project boundaries

- The method is personal research and repeatable testing, not a universal performance claim.
- Millimeter values describe travel distance, not milliseconds or guaranteed in-game timing.
- GunZ: The Duel, Wooting, CHERRY, Gateron, and other referenced names belong to their respective owners.
- Linked manufacturer and game-source references support definitions and observed mechanics. They do not endorse this project.
- See `LICENSE.md`, `SECURITY.md`, and `DEPLOYMENT.md` before reuse or publication.

The active stylesheet, scripts, and Cycle Tester link use the `v=2.6.0` asset query so a
complete reupload does not leave a browser on the older Revision 2.4 cached files.

The introduction defines actuation, RT A, and RT D in tuning order before the reader
enters the method. Guide Page 2 follows one complete dash and ends with the Cherry MX
Red versus Lekker V2 L60 key-travel comparison. Page 3 establishes one familiar
actuation point with Rapid Trigger OFF, then checks that same profile in GunZ and normal
typing. Page 4 is the RT A pass, Page 5 is the RT D and cycle-recheck pass, and Page 6
validates the result. The public guide and Research Notebook each contain 10 pages.

Guide Page 2 includes the plain-English mechanical-to-Hall Effect comparison and ends
with actions for Page 3 and the dedicated Cycle Tester. Page 4 keeps the RT A benefits,
risks, method, recorded result, and watch-outs together. Page 5 does the same for RT D,
then rechecks both directions of the repeat cycle before Page 6 validates the result.
The Ducky example models fixed ON at 2.00 mm, bottom-out while still ON
at 4.00 mm, and OFF in the explicitly labeled 1.99–1.90 mm example reset range. The
paired Wooting Lekker V2 L60 comparison model keeps 2.00 mm actuation and 4.00 mm
total travel, then uses RT D and RT A to shorten the repeat cycle. The guide routes each repeated symptom to actuation, RT A, or RT D before asking
the reader to change a value.

At wide tester widths, the full travel diagram is centered horizontally as one group:
the travel rail is on the left, Live Checker is in the middle, and the compact readouts,
cycle controls, and explanation are on the right. At 920 px and below, the controls move
beneath the rail and checker. At 640 px and below, all three parts stack vertically.
