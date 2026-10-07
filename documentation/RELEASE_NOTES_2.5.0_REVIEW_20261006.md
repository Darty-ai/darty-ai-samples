# Darty-Ai 2.5.0 release-note review

Review date: **2026-10-06**. Product sources reviewed: **native 2.5.0.6353 /
CEP 2.5.0**, including the earlier Windows **2.3.0.6351** history fix.
Editorial implementation: `8b0b358c970c1a01ca164c27896c5376cfa81ab5`.

## Reviewed sources

| Repository | Revision | Purpose |
| --- | --- | --- |
| Samples | `4cba63ac40a6511cb773e720577d75b1d804b7dc` | Trevor's English 2.5.0 draft and existing published feed |
| Native | `5915f0aa3b04959e5ee43319ba42e25085a76524` | Mainline changelog, resolved-bug record and table color-editor documentation |
| CEP | `87c7cc1488492fc085608247fa68ba8bebccfd36` | Mainline changelog, resolved-bug record and 2.5.0 release metadata |

Both product changelogs and resolved-bug records were checked against recent
implementation history. The release identity change is already implemented by
native `7eeffb4d5969334d13402da94e3cc45fd79f9e22` and CEP
`21fa7da86b2dd49ebb77c95df8e8e4c14e9fd15e`.

## Editorial changes

- Retain all 31 feature and fix items in the English draft and provide matching
  German, Dutch, French, Spanish and Italian content for every item, title,
  compatibility warning, note and change-type label.
- Clarify live editing in the dedicated Tables panel and replace the technical
  phrase "indexed formatting" with "targeted formatting".
- Correct the structural-editing claim to **sort rows**. `sortRows` is supported;
  column sorting is absent from the public Table operations and implementation.
- Review the Windows table-color Undo/Redo fix from native
  `60ef35996d35f726c7c168fc932c2c6c36e5ddae` and the latest CEP gradient,
  color-model, swatch-ownership and color-library preference fixes from
  `84041c189e86af5f4c4fd32d336d34d2acbfe6e0`.
- Replace the customer-facing internal build-review note with a short statement
  about intended Illustrator compatibility and forthcoming installer links.
- Keep 2.5.0 unavailable in the public feed: `released` and `public` remain
  `false`, with no invented date or installer links. `current-versions` remains
  the existing published 2.2.0 release; older history and downloads are preserved.

The release-feed JSON is authored Samples content. It is separate from the CEP
UI translation workbook and its generated locale catalogs. No workbook or
generated UI translation file is changed by this editorial task.

## Vasily's wording revisions — 2026-10-06

Product source versions remain **native 2.5.0.6353 / CEP 2.5.0**.
Revision implementation: `47f0e1dc458caa9a23cf19bf1bbf5ce91a77961f`.

Apply Vasily's six English revisions and their German, Dutch, French, Spanish
and Italian equivalents:

- Remove operating-system names from on-canvas table selection.
- Remove the pre-release stale-color fix from live table editing; retain the
  supported editing and Undo/Redo features.
- Remove legacy-formatting details from saving tables to Excel.
- Remove stale-draft handling from the Tags panel description; retain focus
  preservation during table refreshes.
- Rename the heading to **Advanced Text Controls**.
- Describe Google Sheets and cloud-account access without Go-server or native
  implementation details.

All 31 items remain in the same order. Unrelated release content, translations,
compatibility warnings, historical releases and release-control metadata are
unchanged. These are editorial changes, with no new resolved software bug.

## Validation

All checks below passed on 2026-10-06, including 12 CEP consumer scenarios
(six locales in each of development and production mode).

- Validate the complete feed against `misc/change-log.schema.json` with
  PowerShell `Test-Json -SchemaFile`.
- Check all six locales for equal item counts, complete fields, matching
  technical format names and valid Markdown list items.
- Confirm exactly six requested item revisions in each locale against
  `5defe949f4f682d3cb24885ff1e87a34fb5a9813`, with unrelated content unchanged.
- Compare historical releases and all release-control metadata with Trevor's
  source revision to confirm they are unchanged.
- Exercise the actual CEP update-feed consumer in development and production
  modes for each locale: development displays the translated draft; production
  selects the existing published release.
- Check JSON formatting and Git whitespace. This content-only task does not
  establish new native, CEP or installer runtime qualification.

## Launch handoff

The draft targets Illustrator **2025/2026 (29/30)**. Each language tells
Illustrator 2024 users to keep **Darty-Ai 2.2.0**.

When final installers are ready, add their verified URLs and the actual release
date, revise the draft note in all six languages, and explicitly approve the
public feed/version changes. Keep installer export and runtime qualification
under the established release workflow.

Vasily will handle the homepage boxes in the site repository. MCP remains
post-launch work as Trevor requested.
