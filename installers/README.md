# Installer downloads

New exports use the full native release/build identity and a short platform
suffix:

| Platform | Pattern | LTS 2.2.0 example |
| --- | --- | --- |
| Mac | `Darty-Ai-<major.minor.micro.build>-Mac.dmg` | `Darty-Ai-2.2.0.6177-Mac.dmg` |
| Windows | `Darty-Ai-<major.minor.micro.build>-Win.exe` | `Darty-Ai-2.2.0.6177-Win.exe` |

See [Mac downloads and validation](Mac/README.md) and
[Windows downloads and validation](Windows/README.md).
[Darty-Ai-2.2.0.6177-Win.exe](Windows/Darty-Ai-2.2.0.6177-Win.exe) is the signed
October 19, 2026 build, uploaded on October 20 at Vasily's request. It starts
per-user, offers elevation only for protected legacy payloads, and uses
filename-based cleanup without runtime content-hash gates. Download a fresh
copy: the September 24 download used the same filename and version. See the
Windows page for completed qualification and remaining manual checks.

The signed and notarized mainline
[Darty-Ai-2.3.0.6281-Mac.dmg](Mac/Darty-Ai-2.3.0.6281-Mac.dmg) is also available
for installation-order testing with 2.2.0.6177. Its source fixes retain the
production CEP Tables panel and validate the same payload on Mac and Windows;
a new Windows mainline EXE was not built in this Mac export.

The two Windows installers using `-LTS24` names have been removed at Vasily's
request because they interfere with deployment scripts. Use the current
`Darty-Ai-2.2.0.6177-Win.exe` for Windows LTS testing.
The current Windows EXE also removes the visible LTS/LTS24 suffix from Setup
and Installed Apps. The Windows README records the current signed build and
its qualification; historical signed bytes remain available in Git history.

Download folders contain installer files and READMEs only. Do not add manifest
or checksum files to Samples. Detailed Windows verification evidence
remains in the [release source report](https://github.com/dartyai/p-tests/blob/codex/windows-lts-2.2.0-filename-installer/installer-notes/WINDOWS_FILENAME_INSTALLERS_20261019.md).
The September 23 Mac export also removes channel labels from its mounted disk,
installer/uninstaller app names and embedded package title. Its filename remains
unchanged; download a fresh copy. Mac manifests, checksums and verification
records remain in the native source repository linked from the Mac README.

Installer and uninstaller detection uses stable product IDs and installation
locations, so download naming does not change replacement or removal behavior.
Historical downloaded EXE/DMG files are not removed by uninstalling the product.

Help compares CEP release metadata and follows explicit platform URLs in
`misc/change-log.json`; uploading a file alone does not announce an update.
The feed currently advertises 2.2.0. Native-build comparison and LTS/mainline
eligibility remain separate updater work.

[Windows export, upgrade and uninstall instructions](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_INSTALLER_NAMING_HANDOFF_20260922.md).
