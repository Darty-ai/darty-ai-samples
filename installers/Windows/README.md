# Darty-Ai 2.2.0.6177 for Windows

Use **Darty-Ai-2.2.0.6177-Win.exe** from this folder. The installer and generated
uninstaller are signed and timestamped. The public product name is Darty-Ai.
Samples keeps Windows EXEs and Markdown only; private build evidence is kept
separately. Vasily authorized this September 24, 2026 upload before the remaining
manual checks. Download a fresh copy: the filename and version are unchanged.

The package contains native 2.2.0.6177, CEP 2.2.0, the Go backend and exact
Illustrator SDK 28.1/build 140. It accepts an existing empty external Darty-Ai
folder and uses verified replacement, rollback and owned-file removal.

## September 24, 2026 changes

- Accept empty or regular metadata-only external Darty-Ai folders.
- Select the signed CEP 2.2.0 archive and verify replacement with rollback.
- Discover and confirm existing owned AIP, Go, CEP and helper files, including
  external copies after Illustrator is removed. Preserve unrelated files.
- Keep uninstall available after failures and offer separate per-file legacy
  administrator cleanup. Product wording remains Darty-Ai.

The 60 installer regressions, actual install/reinstall/uninstall and locked-file
failure/retry checks passed. The original development setup was restored.

## Brief manual acceptance

1. Close Illustrator normally and install this EXE. On a fresh profile/PC, open
   Window > Extensions > Darty-Ai, choose a separate safe plug-in folder through
   CEP setup, and restart Illustrator. An existing empty Darty-Ai child should work.
2. Check Help: **2.2.0 - 6177** and the actual later CEP/native compilation date.
   Tools should omit Tables and native Tags visibility controls. Check account
   sign-in/cloud behavior through the Go backend.
3. Use Settings > Apps > Darty-Ai > Uninstall. Review the actual existing-file
   list, cancel, and confirm the installation remains. Run it again to confirm
   removal; unrelated files, preferences and account data should remain.
4. If legacy administrator files are found, review the separate cleanup choice.
   Removing them requests UAC; keeping them must be an explicit choice.

Scripted checks cover replacement/removal, missing and changed destinations,
file locks, failure reporting and preservation. The exact candidate loaded in
Illustrator 2026/30.3.0 and passed all eight native smoke checks. Visual CEP,
Settings > Apps/UAC and another-PC acceptance still need manual results.

See the [source and Windows qualification report](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_LTS_LIFECYCLE_20260924.md)
for precise source, artifact and test provenance.
