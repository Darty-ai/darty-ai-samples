# Template and spreadsheet authoring rules

Owner: Darty Ai. Applies to Darty-Ai demos, sample packs, DIY kits, and generated
workbooks. Agreed with Trevor on 2026-10-26. Maintainers include Vasily.

This is the canonical authoring guide in `com.darty.ai/documentation`.
Copies in the native, samples, website and Vasily repositories, and in delivered
kits, must be updated together. Source code and method READMEs take precedence
if an implementation changes; confirm the relevant release before removing a
setting. These are authoring rules, not changes to the public API.

## 1. Put fixed properties in the template

If a property is fixed for an item, author it in Illustrator. Do not create a
spreadsheet column merely to restate it. This includes fonts, font sizes,
justification, colors, borders, padding, fixed dimensions and placement
orientation. Different template sizes may have different fixed typography.
A font size belongs in the data only when records actually need different sizes.
Prefer a fixed fitting rule in the template when that meets the design.

A necessary exception is artwork created or replaced at runtime that cannot
inherit a property from its target. Use a named template style or other shared
reference where possible. For example, generated barcode human-readable text
can use a template character style rather than repeated font and size columns.
Do not remove necessary creation parameters just because their values are fixed.

## 2. Apply shared changes together

Give items a shared semantic tag when they receive the same change, e.g.
`color-fruit-accent` or `copy-product-name`. Keep individual role tags when useful.
Use one rule for the shared tag. A search such as
`item-1 | item-2 | item-3` is also valid. Do not repeat the same font, color or
replacement instruction separately for every object.

Use generic panel/role names: `lid-image-fruit-top-left`, `lid-image-leaves`,
`front-text-product-name`. Avoid sample-specific names such as `plums` for a
placeholder that will hold other fruits. The old `fp-` prefix is a naming
convention, apparently “fruit packaging”; it has no Darty-Ai API requirement.
Remove it unless a real namespace distinction is useful and documented.
For managed tables, update the native table `tags` property as well as artwork
tags: rebuilding a table restores its saved metadata tags. Check the names again
after a data update, not only immediately after renaming.

## 3. Omit actual defaults

Remove columns that merely repeat the applicable native/CEP default. A blank
property, an explicitly false value, a UI initial value, and an inherited
property are not interchangeable. Verify the method, file type, creation/update
mode and dispatch payload. Examples in documentation are not default definitions.

If a non-default setting is required and common to all records, put its value in
the property header default; leave ordinary data cells blank. Do not remove it
just because it is constant. For PNG placeholders, `mode:mask`,
`fittingMethod:fit` and `embed:false` may all be intentional non-defaults.

## 4. Put common folders in header defaults

When only filenames change, put the common folder (including the trailing slash)
in the property header and only the filename in each data row. Apply this to
image assets, template files and other file properties supported by the parser.
Keep portable path variables; do not repeat absolute machine-specific folders.

| Workbook row | Example |
| --- | --- |
| Tag | `lid-image-leaves` |
| Method | `place` |
| Property/default | `filePath: {{DATA}}/../Assets/` |
| Column label | `lid-image-leaves.filePath` |
| Data | `plum-leaves.png` |
| Next fruit | `apricot-leaves.png` |

For templates, use `path: {{DATA}}/../AI Templates/` and filenames such as
`Fruit Packaging 200x136x68.ai`. `{{DATA}}` resolves to the data-file folder.
A folder default supplies context; it is not a file to place. Verify all resolved
paths after generation. Do not assume this folder-combination behavior applies
to arbitrary string properties or URLs.

## Document color mode

**All kit Illustrator documents must use CMYK**, unless a particular kit has a
clear reason to use RGB. Record the reason in that kit's guide and validation
report. Every current DIY kit, including Compression and XMP, uses CMYK.
An RGB PNG/JPEG export setting does not require an RGB Illustrator document.
Convert the document before authoring its global swatches, then verify the saved
and reopened document and swatch color spaces. Require templates to reopen
without unsaved changes; if Illustrator migrates a staged file on first open,
save it and verify another clean reopen. CMYK spreadsheet values alone do
not prove that an RGB document retained CMYK global swatches.

## 5. Use named global CMYK swatches and integer channels

Use `makeSwatch` (spreadsheet method `swatch`) for meaningful named CMYK global
swatches such as `Cherry Red`. Link relevant text, paths and gradient stops to
the same global color. Change the swatch once per record, rather than specifying
its channels independently for every object. A shared tag is useful when
assigning these links to template artwork.

**Swatch color channel values must be integers only.** CMYK channels are whole
percentages from 0 to 100; RGB channels, when needed, are whole values from 0 to
255. Use integer channels for other supported spaces within their valid ranges.
Convert colors with the intended color-management settings, then round the
resulting swatch channels once. Do not round product data, nutrition values,
prices, dates or identifiers under this rule. This is an authoring convention;
the underlying color APIs can accept decimal values.

Keep a stable way to locate the swatch across previews. If a record renames a
swatch, verify template restoration/Undo and later records; do not silently
create disconnected colors. Store fixed swatches in the template.

## 6. Separate gradient color definitions from artwork geometry

Create a reusable gradient ramp once and reference named global colors in its
stops. Put fixed stop layout and each object's angle, origin, length and
orientation in the template. Gradient swatches store the ramp, not instance
geometry. Keep a separate reversed ramp only where the design needs it.
Include spreadsheet gradient properties only when they vary across records.
Omit midpoint 50, opacity 100 and evenly distributed locations when appropriate.
Check upright and inverted panels after changing global colors.

## 7. Let table data provide dimensions where possible

Do not add `rows` or `columns` when supplied data already determines the required
shape. Store fixed table typography, padding, borders, fills, merge rules and
fitting in the managed template table. Supply only changed cell data and any
necessary structural changes.

Creation can infer dimensions from nested cells or row/column assignments.
Current native updates preserve existing dimensions as a minimum: shorter data
alone does not shrink an existing table or clear untouched trailing cells.
Prefer a template with the minimum required shape and restore it between records.
An explicit dimension is justified only for intentional blank space, ambiguous
flat input, or a verified shrink requirement. Test large-to-small transitions.

When updating a table, omit `ranges` to retain its saved rules. Supplying a
`ranges` array replaces the saved array; it does not merge only the changed rule.
Do not send a single title adjustment and accidentally discard borders or
alignment rules. Preserve both literal content and the intended formatting.

## 8. Preserve data and validate the result

Include the complete dataset, not just the first demo records. Preserve all
languages, product text, quantities, nutrition, batch/date fields, barcode
identifiers and QR destinations. Keep barcode values as strings. Assets may be
delivered separately, but their references must remain valid.

Validate with the real CEP parser and the loaded native plugin. Compare content,
resolved paths, shared tags, global swatch links and table shape. Preview varied
records and reverse transitions, including the longest localized text. Check
image orientation/masking, gradient direction, barcode readability, table fit
and exports. Never call a template finished based solely on XLSX validation.
Apply the validated packaging pattern to all DIY kits; record per-kit exceptions.

## Verified defaults and source references

Checked 2026-10-26 against the mainline source and method READMEs. CEP 2.5.0;
loaded native at the start of this work: 2.5.0.6496. Recheck when changing versions.
Native paths below are relative to `p-tests`; CEP paths to `com.darty.ai`.

| Method/property | Default or omission behavior | Authoring consequence |
| --- | --- | --- |
| `place.keepBackground` | `false` | Omit unless background must be kept. |
| `place.mode` | Raster files: `image`; other files: `mask`; text cannot use `image` | PNG `mask` is an explicit override, not the raster default. |
| `place.fittingMethod` | Unspecified maps to native `kReconform` | `fit` is not the default; retain it when needed. |
| `place.alignment` | Center (`kMidMid`) | Omit a redundant center setting. |
| `place.clipping` | `true` | Omit a redundant true. |
| `place.embed` | `true`; symbol placement forces embedding | Keep `false` for linked assets. |
| `place.usePreviewBounds` | `true` | Omit a redundant true. |
| `place.addBoundingBox`, `place.placeAsTemplate`, `place.plainText`, `place.outlineText` | `false` | Omit redundant false values. |
| `place.autoRotate`, `place.keepOriginal`, `place.deselectArt` | `true` | Verify the template target's authored orientation before dropping explicit rotation. |
| `place.rotation` | `0` | Omit a redundant zero. |
| Text font, size, justification, fill | Unspecified; no universal Arial/6.5 default | Preserve template formatting; don't invent an API default from the sample. |
| `makeSwatch.color.global` | `true` except Grayscale | No redundant `global:true` for CMYK. |
| New color tint | `100` | Omit redundant full tint. |
| Swatch color space/channels/name | Not universally specified | Supply the intended color and identity. |
| Gradient name/type | Name uses `color.swatchName`; type `linear` | Omit redundant duplicates/linear where appropriate. |
| Gradient stops | Required for creation; midpoint `50`, opacity `100`, locations evenly distributed | Keep meaningful deviations only. Partial edits use one-based stop indexes. |
| Barcode `replace`, `autoRotate`, `rotation` | `true`, `true`, `0` | Omit redundant values. |
| Barcode `fitToTargetBounds` | True only when no explicit size is supplied | Fixed target bounds can replace repeated width/height; verify output. |
| Barcode colors | Black modules, white background | Omit only when these are intended. |
| Barcode HRT/error correction | Symbology/library-dependent when omitted | Do not assume universal `addHRT` or QR `M` defaults. |
| Table dimensions | Creation infers from data; empty creation 3 × 3. Updates preserve current size as minimum. | Usually omit dimensions; verify shrink cases. |
| Table cell data | Empty on blank creation; unspecified cells retained on update | Do not confuse absent data with clearing cells. |
| Table `trim`, `parseMarkdown`, `preserveSourceFormatting` | `false` | Omit redundant false values. |
| Table `useSourceFonts` | `true` | Relevant when importing source formatting. |
| `resetFormattingOnImport` | Tool/live UI true; Builder unset; saved binding false when omitted | UI composition behavior, not a universal native reset default. |
| Table `headerRows`, `footerRows` | Creation 1 / 0; updates retain current | Keep intentional changes only. Source-binding band defaults are separately 0 / 0. |
| Table padding / stroke width | Creation 4 / 1; updates retain current | Author fixed appearance in the managed template. |
| Table column widths / row heights | Blank creation 100 / 40; updates retain current | Data-driven shape and fitting still need visual checks. |
| Table `autoFitRows`, `autoFitColumns` | Creation false; updates retain current | Save fixed fitting in template. |
| Table `ranges` | Creation empty; updates retain when omitted, replace when supplied | Never assume partial-array merging. |

Native sources:

- `README_3_TRANSFORM.md`, `VartUtils/Source/VartUtilsPluginTagsTransform.cpp`,
  `PlaceFile` (particularly fitting, raster mode, embedding and auto-rotation).
- `README_7_TEXT.md`, `VartUtils/Source/VartUtilsPluginText.cpp`, and
  `VartUtils/Source/VartUtilsPluginBarcodeSwatches.cpp` (`TextFeatures`).
- `README_6_ASSETS.md`, `VartUtils/Source/VartUtilsPluginBarcodeSwatches.cpp`,
  and `VartUtils/Source/GradientUtils.cpp` (swatches, gradients, barcodes).
- `README_2_TABLES.md`, `VartUtils/Source/TableUtils.cpp`,
  `VartUtils/Source/TableCellData.cpp`, `VartUtils/Source/TableSourceModel.cpp`.

CEP sources:

- `src/js/main/groupColumns.ts` (header defaults, folder defaults, file resolution).
- `src/js/var-app/shared/DispatchCalls/dispatchGateway.ts` (actual native payloads).
- `src/js/var-app/shared/UI_Keys` (property metadata and aliases).
- `src/js/ui/components/pages/tools/tables` (UI composition versus native defaults).
