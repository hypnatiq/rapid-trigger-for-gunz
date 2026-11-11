# Rapid Trigger for GunZ

I built this guide to answer a practical GunZ question: when a Hall-effect keyboard feels inconsistent, which setting should I test first, and how do I know whether the change actually helped?

This is a community guide and personal testing record. It is not a universal preset. I keep it on GitHub because the baseline, one-change-at-a-time method, failed results, rollback points, and evidence limits are useful parts of the project. It remains GitHub-only and is not part of my current resume or LinkedIn project lineup.

## Why I built it

Hall-effect settings can look precise in software and still feel different during repeated presses, releases, and movement timing in GunZ. I wanted a method that starts with the movement problem, connects it to the correct keyboard control, changes one value, and repeats the same test before another setting is touched.

The guide separates three controls:

- **Actuation** starts the first press.
- **RT D** controls how far the key must rise before the current press releases.
- **RT A** controls how far the key must move down after a reversal before the next press is recognized.

One dash uses two presses of the same direction. The settings affect different parts of that cycle, so I do not tune them as if they were interchangeable.

## Current personal result

- FreeStyle GunZ: 0.60 mm actuation, 0.15 mm RT A, 0.25 mm RT D
- Earlier 1.00 mm checkpoint: 1.00 mm actuation, 0.20 mm RT A, 0.15 mm RT D
- Preserved Clan War and TDM checkpoint: 1.20 mm actuation, 0.35 mm RT A, 0.15 mm RT D

These are my personal test records in FreeStyle GunZ. They are travel distances in millimeters, not timing measurements. Steam GunZ has not been tested, and the current values are not presented as the correct settings for every player, keyboard, switch, or server.

## How I test a change

1. Save a known working profile before changing anything.
2. Confirm actuation with normal typing and familiar GunZ movement while Rapid Trigger is off.
3. Hold RT D at a stable starting value and tune RT A for consecutive movement.
4. Tune RT D only after RT A can produce the repeated movement.
5. Recheck RT A after an RT D change, then recheck RT D after the rhythm changes.
6. Validate the complete result in Training Room, Clan War, Team Deathmatch, and a longer session.
7. Keep earlier checkpoints available for rollback instead of assuming the newest value is universally better.

A repeated symptom can tell me which control to test first. It does not prove one setting caused every missed input.

## Start here

1. Open the [public guide](https://gunz-rt.netlify.app/) for the plain-language method.
2. Open `rapid-trigger-cycle-tester.html` to compare the press, release, reversal, and second-press cycle.
3. Read `research-notebook.html` for the chronological testing record, including failed and replaced values.
4. Open `hanz-fgunz-settings.html` for my complete current keyboard, game, mouse, sensitivity, bind, and crosshair record.
5. Open `hanz-archive-vault.html` for earlier checkpoints kept as rollback evidence.

## What the interactive tester does

The Cycle Tester compares a saved starting profile, my current FreeStyle GunZ result, and a user-entered profile. It explains calculated travel inside Event History so the number stays beside the action that produced it.

When a required custom value is missing, the tester marks that field. When a completed combination cannot work within the selected travel model, it identifies the conflicting value and physical boundary instead of presenting a false result.

The mechanical comparison is a teaching model. Its reset range is not presented as a manufacturer specification, and the Hall-effect comparison model is not my personal profile.

## What changed across my checkpoints

The 1.20 mm profile gave me a stable known base. The 1.00 mm checkpoint improved consistency but could still require more effort in faster games and longer sessions. The current 0.60 mm profile keeps the response I wanted while reducing the movement needed near the top of the key. Raising RT D to 0.25 mm restored more intentional release margin after the actuation and RT A changes.

Those conclusions describe my own testing. The archive keeps the earlier values visible so the path can be reviewed instead of rewritten as a straight line of successes.

## Masangsoft review status

On October 10, 2026, I submitted the guide to Masangsoft for consideration as an official or licensed community resource. Masangsoft confirmed that the proposal was forwarded to the relevant department for internal review.

The review is still pending. This is not an approval, license, endorsement, or partnership.

## Repository map

- `index.html`: the public tuning method, troubleshooting path, evidence, and tester launch point
- `research-notebook.html`: my chronological testing method, current result, source record, and limits
- `hanz-fgunz-settings.html`: my complete Revision 2.7 setup
- `hanz-archive-vault.html`: earlier keyboard, Rapid Trigger, game-setting, and crosshair checkpoints
- `rapid-trigger-cycle-tester.html`: the interactive comparison and event-history tool
- `site.css` and `site.js`: the shared visual system and site behavior
- `revision-27-translations.js`: the active translation structure; English is the reviewed source, and other languages still need fluent review before being called final
- `DEPLOYMENT.md`: the repository and live-site relationship plus post-deployment checks

## Evidence boundary

- Manufacturer sources explain Hall-effect and Rapid Trigger behavior.
- GunZ application, tuning order, symptom interpretation, and pass conditions come from my personal testing.
- Wootility screenshots support the recorded values but do not make them universal presets.
- The saved game, mouse, sensitivity, bind, and crosshair values provide test context.
- FreeStyle GunZ is the tested environment. Steam GunZ remains untested.
- A setting that worked for me may need a different result for another player.

## Source and deployment status

This repository contains the current Revision 2.7 source. Publishing or replacing the live site is a separate action and requires its own version, link, responsive-layout, tester, and cache validation. Preparing or committing the source does not by itself prove that a public deployment changed.

Copyright 2026 Hanzley Philippeaux. See [LICENSE.md](LICENSE.md), [SECURITY.md](SECURITY.md), and [SANITIZATION.md](SANITIZATION.md).
