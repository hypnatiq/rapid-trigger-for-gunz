GUNZ INPUT LAB - GITHUB READY
Revision 2.7
Prepared 2026-10-26

PURPOSE
This folder is the complete flat GitHub Pages upload for GunZ Input Lab. Every active
website file is at the top level so GitHub's browser uploader cannot skip a folder.

UPLOAD RULE
Open this folder, select every file, and upload the selected files to the root of the
GunzInputLab/gunzinputlab.github.io repository. There is no assets folder in this
package. Do not upload the outer folder itself.

Before committing, GitHub's upload preview must include:
  index.html
  research-notebook.html
  site.css
  site.js
  revision-27-translations.js
  rapid-trigger-cycle-tester.html
  hanz-fgunz-settings.html
  hanz-archive-vault.html
  wootility-current-060-actuation.png
  wootility-current-015-025-rapid-trigger.png
  wootility-current-profile-overview.png

The root of the repository must contain the HTML, CSS, JavaScript, tester, and image
files together. The older assets directory may remain in the repository, but Revision
2.7 no longer uses it.

Do not upload this outer folder as an extra directory level. GitHub Pages must find
index.html at the repository root.

CACHE REFRESH
Revision 2.7 now calls its active CSS, JavaScript, translation file, and tester with a
v=2.7.0 asset query. This prevents the corrected reupload from continuing to display
an older cached asset after GitHub Pages deploys.

REVISION 2.7 CURRENT CONFIGURATION
Current FreeStyle GunZ profile: 0.60 mm actuation, 0.15 mm RT A, 0.25 mm RT D.
The current settings page records the Wooting 60HE, game, mouse, sensitivity, and
crosshair. Hanz's Archive Vault preserves the 1.20 and 1.00 mm checkpoints.

DEDICATED TESTER WINDOW
Page 7 now explains the tester and opens it in a separate browser tab. This keeps the
guide readable and gives the dense interactive tool the full browser width it needs.
In the dedicated tester, at 1,600 px and below, Settings moves
above the Live Travel visualizer before the main layout can be clipped. Inside the
visualizer, the travel rail, Live Checker, and controls reflow again at 920 px and
640 px so each part remains readable.

MECHANICAL TO HALL EFFECT COMPARISON
Guide Page 2 includes a consistency-first transition example inside the 10-page guide.
Its final Cycle Tester button opens the existing tester in a new tab
with the Mechanical to Hall Effect view selected. That view compares:
  Ducky One 2 mechanical example: 2.00 mm fixed actuation, 4.00 mm bottom-out,
  modeled 1.99-1.90 mm reset range.
  Wooting Lekker V2 L60 Hall Effect comparison model: 2.00 mm actuation, 0.55 mm RT D, 1.80 mm RT A,
  4.00 mm bottom-out.
The reset range is labeled as a teaching model, not a manufacturer specification. The
Lekker V2 L60 comparison model is not Hanz's personal profile or a universal preset. All cycle math stays
inside Event History.

TRAVEL DIAGRAM PLACEMENT
At wide tester widths, the complete diagram is centered horizontally. The travel rail
is on the left, Live Checker is in the middle, and the smaller readouts, cycle controls,
and explanation are on the right. At 920 px and below, the controls move beneath the
rail and checker. At 640 px and below, all three parts stack vertically.

REVISION 2.7 CHECKPOINTS
  Current FGunz:      0.60 mm actuation | 0.15 mm RT A | 0.25 mm RT D
  Prior checkpoint:  1.00 mm actuation | 0.20 mm RT A | 0.15 mm RT D
  Saved CW / TDM:    1.20 mm actuation | 0.35 mm RT A | 0.15 mm RT D

PRESENTATION
  Tuning order: actuation with Rapid Trigger OFF, RT A with RT D held stable, RT D,
  RT A recheck, RT D recheck, then Training Room and real-match validation. This is
  separate from the physical key-cycle order of actuation, RT D release, and RT A re-press.
  Public Guide: starts from the GunZ move or repeated symptom, then explains the
  keyboard mechanics and setting to test.
  Research Notebook: uses first-person bullets and sub-bullets to preserve the
  relevant seven-stage tuning history, settings, observations, reasoning, evidence,
  and limits without overwhelming the reader.
  RT A wording: explains the movement-and-aim pacing problem without using WASD as a
  label or implying that the character's base movement speed changed.
  Wootility evidence: both current screenshots click open at inspection size; click the
  enlarged view again, use the close control, or press Escape to return.
  Definition buttons: click once to open; click the same colored term again to close.
  Creator name: Hypnatiq.
  Reader audit: both pages were reviewed as a new GunZ player, experienced player,
  keyboard-settings beginner, technical reader, and quick or smaller-screen reader.
  Mobile navigation: the menu button is the first control on the left. Guide and
  notebook slides stack in reading order without horizontal page overflow.
  Dash wording: one dash is described as two presses of the same direction. RT D owns
  the release between them, and RT A controls how far the key is pressed again before
  the second or later repeated tap is recognized. Literal
  direction-key pairs are intentionally not listed.
  Guide structure: the introduction defines actuation, RT A, and RT D in tuning order.
  Page 2 follows one dash, establishes actuation with Rapid Trigger OFF, and explains
  what stays fixed when Rapid Trigger turns ON. Page 3 is RT A. Page 4 is RT D and the
  cycle recheck. Page 5 is validation.
  The public guide now contains 9 pages; the
  Research Notebook remains a separate 10-page record.
  Tester guidance: choosing See your profile marks every empty required field with a
  red circular white exclamation point. Each marker clears after its field is entered.
  A completed but impossible combination displays a red explanation over the live
  diagram. Cycle calculations appear inside Event History instead of a separate panel.

POST-UPLOAD CHECK
  1. Open https://gunzinputlab.github.io/
  2. Confirm Revision 2.7 appears on the home page.
  3. Open the Cycle Tester and switch between Training Room and Clan War / TDM.
  4. Confirm the values above appear exactly.
  5. Open the Research Notebook and confirm How I reached my current method separates the
     standstill, consecutive-solo, release, in-fight, release-retest, 1.20 mm
     actuation-change, and retune stages.
  6. Confirm the guide and notebook lead with the GunZ situation before the technical
     explanation, and that the new route and timeline cards render correctly.
  7. At 100% zoom, confirm the full Live Checker is visible in the Cycle Tester.
  8. Click both current Wootility screenshots and confirm each enlarges and closes again.
  9. Click the crosshair and confirm the enlarged view preserves its pixel edges and lists
     FG size 1.30. Use Download image and confirm crosshair2-green.png downloads.
  10. Click the same colored definition button twice and confirm it closes on click two.
  11. Select See your profile. Confirm all four empty value fields show a red circular
      white exclamation point, each marker clears after entry, and an impossible value
      combination produces a specific red explanation over the live diagram.
  12. Open the Mechanical to Hall Effect comparison. Run both Ducky One 2 Mechanical
      and Wooting Lekker V2 L60 comparison demos, and confirm their Event History explains each
      activation, release, reversal, and second activation in plain English.

IMPORTANT
Preparing this folder does not publish the site. The public website changes only after
these files are committed to the GitHub repository and GitHub Pages finishes deploying.
