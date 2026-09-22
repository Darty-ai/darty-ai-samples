# Windows installers

Current signed LTS test candidate, September 22, 2026:
[Darty-Ai-2.2.0.6177-Win.exe](Darty-Ai-2.2.0.6177-Win.exe).
Vasily authorized this upload before the remaining manual checks.

- Native **2.2.0.6177**, exact Illustrator SDK **28.1/build 140**.
- Adobe-signed production CEP **2.2.0**, Go helper **2.6.0**, Tables UI disabled.
- Setup, native AIP, Go helper and installed uninstaller signed by **Darty Ai Corp**.

Fresh installation and upgrade from 2.0.2.6176 passed, retaining one installation
and one uninstaller at the same paths. Installed native payloads and all 50 CEP
files match the signed release. Setup preserved all nine Illustrator preference
files. A locked-copy test correctly returned failure, followed by a successful
repair installation.

The signed AIP passed all eight native smoke checks in **Illustrator 2026 /
30.3.0** on Windows build **26200**. Forty installer checks, eight native
packaging guards and two Release CTests passed. The unchanged signed CEP has
the separately recorded September 22 typecheck/build and 39 related checks.
Fresh signed uninstall preserved preferences and user data; separate disposable
legacy-cleanup fixtures passed. Administrator UAC interaction and compatibility
with historical uninstallers are not claimed tested.

**Still to test:** explicit first-run folder choice and visual Help/Tools
confirmation. The local candidate remains installed for that session, with
the original development setup backed up for restoration afterward.
Windows Illustrator 2024/28.0 and a second PC remain unqualified.

Close Illustrator before running Setup. Open **Window > Extensions > Darty-Ai**.
If setup is requested, choose a separate writable Additional Plug-ins folder
outside AppData, Program Files and Illustrator's application directory through
CEP, then exit normally and restart Illustrator. Setup never enables or changes
that preference itself.

Help should show **Version: 2.2.0 - 6177**, **September 18, 2026** (the actual
later compilation date), and cloud server **2.6.0**. Confirm Tools has no Tables
and the native Tags panel/tool is absent. Test familiar tag, text, barcode and
export workflows; report the Illustrator version and any exact error.

[Detailed provenance and validation in LTS](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_LTS_WIN_NAMING_TEST_20260922.md).
This Windows folder contains EXE installers and README files only. Use the
current `Darty-Ai-2.2.0.6177-Win.exe`; the two earlier installers with the
`-LTS24` naming have been removed at Vasily's request because those names
interfere with deployment scripts. This cleanup does not change the website
or updater release flags.
