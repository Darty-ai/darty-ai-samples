# Mac installers

Current test candidate, September 23, 2026:
[Darty-Ai-2.2.0.6177-Mac.dmg](Darty-Ai-2.2.0.6177-Mac.dmg).
Keep the adjacent manifest and SHA-256 file with the installer.

- Universal Intel/Apple Silicon Release native **2.2.0.6177**, SDK **28.1/build
  140**, minimum macOS **12**.
- Adobe-signed production CEP **2.2.0**, Tables/native Tags excluded, Go **2.6.0**.
- Developer ID signed, Apple notarized and stapled. DMG SHA-256:
  `0a031e5824b42154b769bb0d23794b1db5713ee23fe53889fac7f0f72ecbde6a`.

The mounted disk is **Darty-Ai 2.2.0.6177**. Its regular apps are **Install
Darty-Ai** and **Uninstall Darty-Ai**; the separate **Uninstall Darty-Ai Legacy
Admin v1** remains. The package title is **Darty-Ai 2.2.0.6177 for Adobe
Illustrator**. All visible LTS/LTS24 suffixes have been removed. Download a fresh
copy and eject the old image: the download filename and version are unchanged.

Close Illustrator, mount the DMG and open **Install Darty-Ai**. Then open
**Window > Extensions > Darty-Ai** in Illustrator. If setup is requested, choose
a separate safe writable Additional Plug-ins folder through CEP and restart
Illustrator normally. The installer never chooses or enables that preference.
Help should show **2.2.0 - 6177**, the later valid compilation date and Go **2.6.0**.

Package and DMG signatures, Apple tickets, Gatekeeper, all three Universal
installer/uninstaller applications and all 50 signed CEP file comparisons passed.
The actual mounted disk/app names and extracted package title/component labels
were verified. Two native CTests and Mac packaging/lifecycle checks passed.
The unchanged CEP previously passed 39 checks and typechecking. The same
native/runtime source passed earlier Intel Debug Illustrator
2024 smoke checks. This newly exported Release installer has not been installed
or launched in Illustrator during this export; fresh installation, upgrade,
uninstall and Apple Silicon runtime still need testing.

[Source provenance and detailed verification](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/MACOS_INSTALLER_BRANDING_20260923.md).
The existing development installation was preserved. Historical installers below
remain unchanged; the preceding September 22 candidate is retained in source
Git history and the local export backup. This upload does not enable updater or
website release flags.

See the [shared filename convention](../README.md).
