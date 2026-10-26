# Kilnpix

Kilnpix is a pixel art and sprite animation editor. It is a fork of
[LibreSprite](https://github.com/LibreSprite/LibreSprite), which itself is the
GPLv2 continuation of [Aseprite](https://www.aseprite.org) 1.1, so it works and
feels like Aseprite: same tools, shortcuts, timeline and classic skin.

Kilnpix changes:
- Classic Aseprite skin by default.
- Pixel UI fonts (SVN-Determination Sans, Tiny5 for small labels), drawn crisp.
- Windows build and a web version published from this repository.

## Download / try it

- Windows: download `kilnpix-windows-x86_64` from the latest
  [Windows x86_64 workflow run](../../actions/workflows/cmakeWin64.yml) and run `kilnpix.exe`.
- Web: https://dangthaison98pt.github.io/Kilnpix/

## Building

GitHub Actions builds every push to `main` (see `.github/workflows`). To build
locally, follow [INSTALL.md](INSTALL.md); the binary is named `kilnpix`.

## Staying in sync with LibreSprite

```bash
git fetch upstream
git merge upstream/master
```

The upstream CMake target is still called `libresprite`; only its output name
changes, which keeps merges small.

## License

GNU General Public License v2, see [LICENSE.txt](LICENSE.txt). Anyone who receives
a Kilnpix build is entitled to its source code. Credits and third-party notices are
in [NOTICE.md](NOTICE.md).

The previous Godot/Pixelorama-based Kilnpix lives on the `godot-legacy` branch.
