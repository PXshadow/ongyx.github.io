---
layout: page
title: Projects
permalink: /projects/
---

The projects below are chronologically ordered (most recent first).

# [vgmusic.py](https://github.com/ongyx/vgmusic.py)

Python API for the [VGMusic](https://vgmusic.com) website.
vgmusic.py also has a CLI and a (wip) REST interface, besides the importable `vgmusic` module.

<details>
<summary>Features:<summary>

- Search for songs within the VGMusic database efficiently using functions/regexes
- Automate downloading songs (imagine opening them one tab at a time...)
- `concurrent.futures` support baked in for faster parsing and downloading
- Database saved as a JSON file `index.json`, so you can use the excellent [jq](https://stedolan.github.io/jq/) if you want!

</details>

# [otah](https://github.com/ongyx/otah)

Quickly generate an OTA manifest for **signed** iOS `.ipa` app files so they can be sideloaded without a computer.
(Both the `.ipa` and the manifest file needs to be hosted online somewhere.)

# [tankobon](https://github.com/ongyx/tankobon)

A manga website scraper disguised as a manga downloader.
Uses `concurrent.futures` for fastest possible downloads.

# [mothman](https://github.com/ongyx/mothman)

Make Cydia/Sileo repos and fill depictions from `.deb` package files
(so you don't have to do it by hand).

Also, it's pure Python (no wrangling with clang/gcc anymore). Bonus points for running mothman on an iDevice.

# [musdl](https://github.com/ongyx/musdl)

Download songs from MuseScore.com, like [musescore-downloader](https://github.com/Xmader/musescore-downloader).
Currently broken because of an API change in MuseScore (wip).

# [userdefaults3](https://github.com/ongyx/userdefaults3)

Access the [`NSUserDefaults`](https://developer.apple.com/documentation/foundation/nsuserdefaults) ObjC class from Python.
Platforms supported:

- pyobjc (MacOS)
- rubicon-objc (Darwin/Pyto)
- objc_util (Pythonista)
