# Mac installers

## Mainline 2.3.0 test candidate — September 23, 2026

[Darty-Ai-2.3.0.6281-Mac.dmg](Darty-Ai-2.3.0.6281-Mac.dmg) is ready for testing
over 2.2.0.6177 and in the reverse order. This folder contains DMGs and this
README only; manifests and checksum files remain in the native source repository.

- Fresh universal Intel/Apple Silicon Release native **2.3.0.6281**, SDK **2025 /
  29.7**, minimum macOS **12**.
- Current Adobe-signed CEP **2.3.0**, including Main and Tables. The native
  payload provides Tags and the cloud backend.
- Developer ID signed, Apple notarized, stapled and Gatekeeper-verified.
  DMG SHA-256:
  `156a156bcdfe889344b45814eafd3739553039280c5fbb89a1f4a9fb542de3e1`.
- All 47 packaged CEP files match the signed archive. Both native code slices
  match the fresh build. Eight native, 26 CEP and Mac/Windows packaging checks
  passed; Windows validation ran through PowerShell on macOS, without an EXE build.

Close Illustrator fully before installing either version. After installing
2.3.0, restart and confirm Help shows **2.3.0 - 6281**, then check Main, Tables
and Tags under **Window > Darty-Ai**. Install 2.2.0 next, restart and confirm
**2.2.0 - 6177** with its LTS features. Check replacement and retained licensing
in both directions, then uninstall behavior after each direction. These actual
installer/runtime sequences remain untested during this export.

If CEP requests setup, choose a separate safe writable Additional Plug-ins
folder and restart normally. Existing license retention and uninstall messages
are unchanged. This upload does not enable updater or website release flags.

[Mainline source provenance and verification](https://github.com/dartyai/p-tests/blob/experiments/cmake/installer-notes/MAINLINE_MAC_RELEASE_20260923.md).

## LTS 2.2.0 test candidate — September 23, 2026

[Darty-Ai-2.2.0.6177-Mac.dmg](Darty-Ai-2.2.0.6177-Mac.dmg).
Its manifest and checksum remain with the linked source verification record.

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
