# Mac installers

Current LTS test candidate, September 22, 2026:
[Darty-Ai-2.2.0.6177-Mac.dmg](Darty-Ai-2.2.0.6177-Mac.dmg).
Keep the adjacent manifest and SHA-256 file with the installer.

- Universal Intel/Apple Silicon Release native **2.2.0.6177**, SDK **28.1/build
  140**, minimum macOS **12**.
- Adobe-signed production CEP **2.2.0**, Tables/native Tags excluded, Go **2.6.0**.
- Developer ID signed, Apple notarized and stapled. DMG SHA-256:
  `b61e72eb147f1f1a0e591942cbfacbcea6f28c53ca174fd8035430b3b8e30260`.

Close Illustrator, mount the DMG and open **Install Darty-Ai LTS24**. Then open
**Window > Extensions > Darty-Ai** in Illustrator. If setup is requested, choose
a separate safe writable Additional Plug-ins folder through CEP and restart
Illustrator normally. The installer never chooses or enables that preference.
Help should show **2.2.0 - 6177**, the later valid compilation date and Go **2.6.0**.

Package and DMG signatures, Apple tickets, Gatekeeper, all three Universal
installer/uninstaller applications and all 50 signed CEP file comparisons passed.
Two native CTests, 39 CEP checks, typechecking and Mac packaging/lifecycle checks
passed. The same native/runtime source passed earlier Intel Debug Illustrator
2024 smoke checks. This newly exported Release installer has not been installed
or launched in Illustrator during this export; fresh installation, upgrade,
uninstall and Apple Silicon runtime still need testing.

[Source provenance and detailed verification](https://github.com/dartyai/p-tests/blob/long-term-support/installer-notes/MACOS_LTS220_RELEASE_20260922.md).
The existing development installation was preserved. Historical installers below
remain unchanged. This upload does not enable updater or website release flags.

See the [shared filename convention](../README.md).
