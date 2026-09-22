# Windows installers

Current LTS test candidate, September 22, 2026:
[Darty-Ai 2.2.0.6177](Darty-Ai-2.2.0.6177-Windows-LTS24-Setup.exe).
Keep the adjacent manifest and SHA-256 file with the installer.

- Native 2.2.0.6177, built with exact Illustrator SDK 28.1/build 140.
- Adobe-signed production CEP 2.2.0; Tables UI disabled; Go helper 2.6.0.
- Windows signatures: Darty Ai Corp. Installer SHA-256:
  `C7AE8EC5C09BF506075B149400C4EE0B421863EB13AAB3A79957257DEFB2F548`.

Close Illustrator before running Setup. Then open **Window > Extensions >
Darty-Ai**. If setup is requested, choose a separate writable Additional
Plug-ins folder outside AppData, Program Files and Illustrator's application
directory through the CEP chooser, then exit normally and restart Illustrator.
Setup never enables or changes that preference itself.
Help must show **Version: 2.2.0 - 6177**, the later valid CEP/native build date,
and cloud server **2.6.0**. Tools must not show Tables. Test familiar tag, text,
barcode and export workflows; report the Illustrator version and exact error.

The Windows Release AIP loaded in Illustrator **2026 / 30.3.0** with SDK
**28.1**, and all eight native smoke checks passed. CEP typecheck/build and
39 feature/cloud/setup/version/distribution checks, 40 Windows installer tests,
eight native packaging guards and two Release CTests passed.

Actual installation, all installed payload hashes and Adobe/Windows signatures,
unchanged preferences, restart with the signed AIP, all eight native checks,
uninstall preservation and restoration of the original development setup passed.
Manual Help/Tools confirmation and explicit first-run folder choice were not
repeated locally for this candidate; include them in the other-PC test above.

Windows Illustrator 2024/28.0 and a second PC remain unqualified. The earlier
COM automation Quit hang remains documented and is not claimed fixed.

[Build provenance and current test record](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/WINDOWS_LTS220_TEST_20260922.md).
Historical 2.0.2 installers remain unchanged. This LTS candidate does not qualify
the separate mainline feature release or change website/updater release flags.
