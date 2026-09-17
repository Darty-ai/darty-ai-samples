# Windows installers

Current LTS test candidate:
[Darty-Ai 2.0.2.6176](Darty-Ai-2.0.2.6176-Windows-LTS24-Setup.exe).
Keep the adjacent manifest and SHA-256 record with the installer.

- Native 2.0.2.6176, built with Illustrator SDK 28.1/build 140.
- Adobe-signed production CEP 2.0.2; Tables UI disabled; Go helper 2.6.0.
- Windows signatures: Darty Ai Corp. Installer SHA-256:
  `042355DE8B8AEAA69B947BC554E2857AEBB732B721C542F0D3D417AEE692904E`.
- The previous file with this same version/name contained CEP 2.0.10. Compare
  hashes or the adjacent manifest rather than relying on the filename alone.

Close Illustrator before running Setup. If Darty requests an external plug-in
folder, choose a separate writable folder through the CEP panel, then exit and
restart Illustrator. Setup never enables or changes that preference itself.
Help must show **Version: 2.0.2 - 6176**, plus the existing cloud-server line.

The CEP 2.0.2 candidate passed real Windows installation, unchanged-preference
checks, all installed payload comparisons, and Adobe/Windows signature checks.
Its new runtime/uninstall verification is in progress. Windows Illustrator
2024/28.0 and a second PC remain unqualified. The earlier 2025 test passed with
CEP 2.0.10; its separate COM Quit hang remains documented.

[Build provenance and current test record](https://github.com/dartyai/p-tests/blob/long-term-support/WINDOWS_LTS24_INSTALLER.md).
Historical installers remain below this release in the directory. The separate
newer/mainline 2026 installer is not qualified by this LTS candidate.
