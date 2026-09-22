# Installer downloads

New exports use the full native release/build identity and a short platform
suffix:

| Platform | Pattern | LTS 2.2.0 example |
| --- | --- | --- |
| Mac | `Darty-Ai-<major.minor.micro.build>-Mac.dmg` | `Darty-Ai-2.2.0.6177-Mac.dmg` |
| Windows | `Darty-Ai-<major.minor.micro.build>-Win.exe` | `Darty-Ai-2.2.0.6177-Win.exe` |

See [Mac downloads and validation](Mac/README.md) and
[Windows downloads and validation](Windows/README.md). The new
[Darty-Ai-2.2.0.6177-Win.exe](Windows/Darty-Ai-2.2.0.6177-Win.exe) is a signed
test candidate. Vasily authorized its upload before the remaining manual CEP
folder-choice and Help/Tools checks; see the Windows page for current status.
The two Windows installers using `-LTS24` names have been removed at Vasily's
request because they interfere with deployment scripts. Use the current
`Darty-Ai-2.2.0.6177-Win.exe` for Windows LTS testing.
The current Windows EXE also removes the visible LTS/LTS24 suffix from Setup
and Installed Apps. Download a fresh copy after this wording correction;
the filename is unchanged.
Vasily confirmed that the installer otherwise works; the Windows README
records the wording change and his requested fresh signed rebuild.

Windows downloads contain EXE installers and README files only, as requested
by Vasily. Detailed Windows manifests, checksums and verification evidence
remain in the [LTS repository](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_LTS_WIN_NAMING_TEST_20260922.md).
The September 23 Mac export also removes channel labels from its mounted disk,
installer/uninstaller app names and embedded package title. Its filename remains
unchanged; download a fresh copy. Mac's matching manifest and checksum accompany
the corrected DMG.

Installer and uninstaller detection uses stable product IDs and installation
locations, so download naming does not change replacement or removal behavior.
Historical downloaded EXE/DMG files are not removed by uninstalling the product.

Help compares CEP release metadata and follows explicit platform URLs in
`misc/change-log.json`; uploading a file alone does not announce an update.
The feed still advertises 2.0.0. Native-build comparison and LTS/mainline
eligibility remain separate updater work.

[Windows export, upgrade and uninstall instructions](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_INSTALLER_NAMING_HANDOFF_20260922.md).
