# Darty-Ai 2.2.0.6177 for Windows

Download [Darty-Ai-2.2.0.6177-Win.exe](Darty-Ai-2.2.0.6177-Win.exe).
This is the October 19, 2026 signed build, copied to Samples on October 20
at Vasily's request. Download a fresh copy: it replaces the September 24
download under the same filename and version.

The installer and generated uninstaller have valid timestamped Darty Ai Corp
signatures. The package contains native **2.2.0.6177**, CEP **2.2.0**, the Go
backend and exact Illustrator SDK **28.1/build 140**. LTS keeps Tables and native
Tags controls excluded. Samples contains Windows EXEs and Markdown only;
manifests, checksums and detailed build evidence remain in the private archive.

## October 19 installer changes

- Setup starts per-user without administrator privileges. Separate elevation
  is offered only when actual legacy Darty payloads are found in protected
  Illustrator Plug-ins or system CEP locations.
- Ownership, cleanup, receipts and copying have no runtime content-hash gates.
  Copy checks use file existence and length.
- Exact case-insensitive filenames identify Darty files in shared folders,
  including loose AIPs in Illustrator Plug-ins. Dedicated Darty folders also
  cover legacy `zint.dll` and `plugin-version.txt`; generic loose files and
  unrelated contents are preserved.
- Managed native and CEP payload folders are replaced, including obsolete
  helpers and catalogs. Settings, credentials, logs and Illustrator preferences
  remain; junctions and symlinks are not followed.
- Both installation-record schemas are supported. Optional backup/registry
  cleanup failures warn; required file removal or replacement failures remain
  visible.

## Qualification

The exact signed EXE passed mainline-to-LTS upgrade and same-version reinstall
on the local machine, with native/CEP contents and preserved user files checked.
Illustrator 2026 / 30.3.0 loaded native 2.2.0.6177 / SDK 28.1 and passed eight
native smoke checks. LTS source checks passed 60 installer/lifecycle checks,
seven filename-policy groups, eight SDK/provenance checks and two native CTests.
The original development installation and preferences were restored afterward.

Actual protected-location UAC/decline/retry, a separate live uninstall of this
final LTS build, interactive uninstall cancellation, visual CEP Help/account
checks, another PC and Illustrator 2024/2025 runtime remain manual acceptance.
Earlier installer results do not qualify these outstanding checks.

## First launch and manual acceptance

1. Close Illustrator normally before installation.
2. If no usable Additional Plug-ins folder is configured, open
   Window > Extensions > Darty-Ai, select a separate safe folder through CEP
   setup, and restart Illustrator. Setup retains its managed payload and does
   not change Illustrator's external plug-in preferences.
3. Check Help shows **2.2.0 - 6177** and the actual later CEP/native compilation
   date. Check account/cloud behavior through the Go backend and confirm the
   LTS feature exclusions.
4. Review uninstall and any separate administrator cleanup before proceeding.
   Confirm unrelated files, preferences and account data survive removal.

Maintainers can consult the
[source and qualification report](https://github.com/dartyai/p-tests/blob/codex/windows-lts-2.2.0-filename-installer/installer-notes/WINDOWS_FILENAME_INSTALLERS_20261019.md)
and [immutable signed archive](https://github.com/dartyai/p-tests-builds/tree/main/releases/windows/Darty-Ai-2.2.0.6177-Win-0b324f184db73e84).
Uploading this download does not change the update feed or release flags.
