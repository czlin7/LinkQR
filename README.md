<div align="center"> <!-- flex method does not work-->
    <img src="src/icons/ext-icon-64.png" alt="LinkQR icon">
    <h1>LinkQR</h1>
	
[![Extension Version](https://img.shields.io/badge/Version-0.16.0-blue)](https://github.com/czlin7/LinkQR/blob/main/manifest.json) [![License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
![Firefox users](https://img.shields.io/amo/users/link-qr?label=Firefox%20users&color=orange)

[Changelog](./CHANGELOG.md)

</div>

LinkQR is a Firefox extension that simplifies the process of converting web links into QR codes with just a single click. It empowers users to effortlessly copy or download QR codes in PNG/SVG format for convenient sharing. It works completely offline and local.

<div style="display: flex; flex-direction: column;">
    <img src="assets/presentation-1.png" alt="Presentation 1" style="width: 100%;">
    <img src="assets/presentation-2.png" alt="Presentation 2" style="width: 100%;">
</div>

## Table of Contents

- [Features](#features)
- [Install](#install)
    - [Development and Testing](#development-and-testing)
- [Usage](#usage)
	- [Address bar button and Extensions menu fallback](#address-bar-button-and-extensions-menu-fallback)
    - [Extension settings](#extension-settings)
    - [Context Menu Options](#context-menu-options)
    - [Keyboard shortcuts](#keyboard-shortcuts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Features

- [x] Generates QR code from current tab URL
- [x] Extension icon in the address bar, with a Firefox Extensions menu fallback
- [x] Option to download QR Code as PNG or SVG
- [x] Offline support
- [x] Automatically adapts to user's Firefox theme (light or dark)
- [x] Ability to copy QR code as PNG
- [x] Right-click context menu to generate QR code for current tab
- [x] Right-click context menu to generate QR code for links
- [x] Display QR code in a new tab with the option to add a description alongside with adjustable font size
- [x] Automatically upgrade HTTP URLs to HTTPS, with a setting to disable it


### TODO
- [ ] Tab right-click context menu
- [ ] Scan QR code

## Install

[![Get the add-on at the Firefox Add-ons site](assets/get-the-add-on.png)](https://addons.mozilla.org/firefox/addon/link-qr/)<br>
Available on the [Firefox Add-ons site](https://addons.mozilla.org/firefox/addon/link-qr/)

### Development and Testing

To install the LinkQR Firefox extension for development and testing:
1. Clone or download the source code from the [GitHub repository](https://github.com/czlin7/LinkQR).
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" in the left sidebar.
4. Click on "Load Temporary Add-on...".
5. Navigate to the directory where you cloned or downloaded the extension's source code, and select the `manifest.json` file inside the extension's directory.
6. Once loaded, the extension should be available for testing and development.

## Usage

### Address Bar Button and Extensions Menu Fallback

Click the LinkQR icon in the address bar to reveal the QR code for the current webpage. If Firefox displays a search term instead of the full address and hides address bar actions, open LinkQR from Firefox's Extensions menu, use the context menu, or press Ctrl+Alt+Q.

### Extension Settings

Open LinkQR's settings from its page in Firefox Add-ons Manager. **Automatically upgrade HTTP URLs to HTTPS** is on by default and applies to current-tab URLs, links opened from the context menu, and URLs entered in the popup or new-tab QR editor. The setting is shared across Firefox windows. Turn it off to preserve HTTP URLs for sites that do not support HTTPS.

### Context Menu Options

#### Webpage Context Menu:

Right-click anywhere on a webpage to access the context menu. Look for "Open LinkQR" and click to reveal the QR Code of the current webpage.

#### Link Context Menu:

Right-click on a link to access the context menu. Choose "Generate LinkQR Code" to reveal the QR Code for the selected link.

### Keyboard Shortcuts

- Ctrl+Alt+Q: Open the LinkQR Popup for current webpage.

## Maintainers

[@czlin7](https://github.com/czlin7).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/czlin7/LinkQR/issues/new) or submit PRs.

LinkQR follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## Acknowledgements

 * [firefox-qr](https://github.com/pudymody/firefox-qr?tab=readme-ov-file#about-the-project) - Used for generating QR codes in the Firefox browser extension.

## License

[LinkQR](https://github.com/czlin7/LinkQR) Copyright &#169; 2024 [czlin7](https://github.com/czlin7).

This project is licensed under the GNU General Public License v3.0 - see [LICENSE](LICENSE) for more information.
