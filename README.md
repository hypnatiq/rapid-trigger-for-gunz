# Rapid Trigger for GunZ

A community-focused GunZ guide and personal research notebook by Hypnatiq.

## Revision 2.7

Revision 2.7 records Hanz's current FreeStyle GunZ configuration and preserves the prior
checkpoints as an archive instead of overwriting the testing history. The current Wooting
60HE profile uses Gateron Magnetic Jade switches with 0.60 mm actuation, 0.15 mm RT A,
and 0.25 mm RT D.

All saved settings, checkpoints, and movement results were tested only in FreeStyle GunZ.
Steam GunZ has not been tested yet. Its Cycle Tester section is a locked placeholder until
the same controlled movement checks have been recorded there.

The Research Notebook now introduces the current keyboard and profile before the detailed
Wootility records. Direct buttons open the complete current configuration and Hanz's
Archive Vault. The archive records the 1.20 to 1.00 to 0.60 mm actuation progression,
earlier Rapid Trigger values, prior game settings, and the previous crosshair.

## Community purpose and Masangsoft review

I built this as a community resource, not a universal preset. The goal is to give new
and experienced players a controlled way to tune their keyboard around movement they
already know, then validate the result in Training Room and real matches.

On October 10, 2026, I submitted the guide to Masangsoft for consideration as an
official or licensed community resource. Masangsoft confirmed that the proposal was
forwarded to the relevant department for internal review.

This is not an approval, license, endorsement, or partnership. The review is still
pending.

## Current tested checkpoint

- Current FreeStyle GunZ result: 0.60 mm actuation, 0.15 mm RT A, 0.25 mm RT D
- Prior 1.00 mm checkpoint: 1.00 mm actuation, 0.20 mm RT A, 0.15 mm RT D
- Preserved Clan War / TDM checkpoint: 1.20 mm actuation, 0.35 mm RT A, 0.15 mm RT D

These are Hanz's personal test records. They are not universal presets. The values are
travel distances in millimeters, not timing measurements.

The guide now states the GunZ input model directly: one dash uses two presses of the
same direction. Actuation starts the first press, RT D controls the release between
the presses, and RT A controls how far the key is pressed again before the second or later repeated tap is recognized.
The copy does not spell out direction-key pairs because GunZ players already know them.

## What changed in the method

1. Preserve a known working profile before changing anything.
2. Confirm actuation with normal typing and familiar GunZ movement.
3. Tune RT A for consecutive movement before tuning RT D for the repeated late-dash release.
4. Recheck RT A after RT D changes and recheck RT D after the rhythm changes.
5. Validate the whole result in Training Room, Clan War, Team Deathmatch, and longer sessions.
6. Keep old checkpoints available as rollback points instead of treating every newer value as universally better.

The 1.20 mm result proved the method. The 1.00 mm checkpoint improved consistency but
could still require more effort during high-level games and longer sessions. The current
0.60 mm profile keeps the response Hanz wanted while reducing the effort needed near the
top of the key. The higher 0.25 mm RT D restores more intentional release margin after
the actuation and RT A changes. These conclusions are personal test results, not a preset.

## Pages and files

- `index.html`: public Rapid Trigger method, tuning order, troubleshooting, evidence,
  GunZ-first quick routes, and the dedicated Cycle Tester launch point.
- `research-notebook.html`: the chronological personal method, current FGunz result,
  seven-stage test timeline, current screenshot record, references, and evidence limits.
- `hanz-fgunz-settings.html`: the current Revision 2.7 Wooting, FreeStyle GunZ,
  sensitivity, bind, and crosshair record.
- `hanz-archive-vault.html`: saved keyboard, Rapid Trigger, game-setting, and crosshair
  checkpoints retained as rollback evidence.
- `rapid-trigger-cycle-tester.html`: interactive tester with Training Room,
  Clan War / TDM, and user-entered profile comparisons. The calculated travel is
  explained inside each Event History update rather than in a separate math panel.
  Selecting the custom profile marks every empty required value with a red circular
  exclamation point; each marker clears after entry. Completed combinations that cannot
  work display the specific conflicting value and physical boundary over the live diagram.
- `site.css` and `site.js`: shared visual system and site behavior.
- `fgunz-crosshair.png`: Hanz's current yellow crosshair record.
- `crosshair2-green.png`: the prior green crosshair retained for the archive.
- `revision-27-translations.js`: active translation structure carried forward
  for Revision 2.7. English is the updated source voice; other languages still need
  fluent review before being called final.

## Evidence boundary

- Manufacturer sources explain Hall-effect and Rapid Trigger control behavior.
- GunZ application, tuning order, symptom model, and pass conditions come from
  personal testing.
- The current Wootility screenshots show the 0.60 mm actuation and 0.15 / 0.25 mm
  Rapid Trigger result. Earlier screenshot records remain available in the Archive Vault.
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

This is a static site. Upload all files and folders to the root of
`GunzInputLab/gunzinputlab.github.io`. Keep `.nojekyll` and the complete `assets`
folder. No framework or build command is required.

Revision 2.7 is prepared source until it is uploaded and the live deployment is checked.

The active stylesheet, scripts, and Cycle Tester link use the `v=2.7.0` asset query so a
complete reupload does not leave a browser on an older cached release.

Guide Pages 2 and 3 are merged into one continuous chapter: the plain-language Rapid
Trigger explanation now flows directly into the complete press, release, and second-press
cycle. The public guide contains 10 pages; the Research Notebook remains a separate
10-page record.

At wide tester widths, the full travel diagram is centered horizontally as one group:
the travel rail is on the left, Live Checker is in the middle, and the compact readouts,
cycle controls, and explanation are on the right. At 920 px and below, the controls move
beneath the rail and checker. At 640 px and below, all three parts stack vertically.
