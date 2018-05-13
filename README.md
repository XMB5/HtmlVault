# HtmlVault
Encrypt an html page using AES

## Steps
1. `npm install -g inliner`
2. `inliner https://github.com/page.html > page.html`
3. Go to [build.html](https://xmb5.github.io/HtmlVault/build.html)
4. Select the file `page.html`
5. Type in a password
6. Click encrypt
7. Save `encrypted.html` and remember the password

## Warning
Once the webpage has been decrypted, the webpage might store unencrypted data in places such as `localStorage` or `IndexedDB`
