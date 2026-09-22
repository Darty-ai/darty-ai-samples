# Installer downloads

New exports use the full native release/build identity and a short platform
suffix:

| Platform | Pattern | LTS 2.2.0 example |
| --- | --- | --- |
| Mac | `Darty-Ai-<major.minor.micro.build>-Mac.dmg` | `Darty-Ai-2.2.0.6177-Mac.dmg` |
| Windows | `Darty-Ai-<major.minor.micro.build>-Win.exe` | `Darty-Ai-2.2.0.6177-Win.exe` |

See [Mac downloads and validation](Mac/README.md) and
[Windows downloads and validation](Windows/README.md). The already published
Windows 2.2.0 installer keeps its original `-Windows-LTS24-Setup.exe` name and
URL. The `-Win.exe` pattern applies to its next export; that new filename has
not yet been built or uploaded. Preserve all previously published signed files.

Keep manifests and checksums with their matching downloads. Installer and
uninstaller detection uses stable product IDs and installation locations, so
download naming does not change replacement or removal behavior. Historical
downloaded EXE/DMG files are not removed by uninstalling the installed product.

Help compares CEP release metadata and follows explicit platform URLs in
`misc/change-log.json`; uploading a file alone does not announce an update.
The feed still advertises 2.0.0. Native-build comparison and LTS/mainline
eligibility remain separate updater work.

[Windows export, upgrade and uninstall instructions](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_INSTALLER_NAMING_HANDOFF_20260922.md).
