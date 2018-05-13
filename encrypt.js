var myDropzone = new FileDropzone({
    target: '#box',
    fileHoverClass: 'entered',
    clickable: true,
    multiple: false,
    forceReplace: true,
    accept: 'text/html',
    onChange: function () {
        var files = this.getFiles()
        var elem = this.element.find('.files')
        elem.empty()
        files.forEach(function (item) {
            elem.append('<div class="file-name" data-id="' + item.id + '">' + item.name + '</div>')
        })
    }
});

var decHtmlP1 = "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Decrypt</title>\n" +
    "    <script>" + cryptoJSsrc + "</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<h3>Decrypt Webpage</h3>\n" +
    "<form action=\"javascript:void(9)\" onsubmit=\"decrypt()\">\n" +
    "    <label for=\"password\">Password: </label>\n" +
    "    <input type=\"password\" id=\"password\">\n" +
    "    <input type=\"submit\" value=\"Decrypt\">\n" +
    "</form>\n" +
    "<script>\n" +
    "    var base64Encrypted=\"";
var decHtmlP2 = "\";\n" +
    "    function decrypt() {\n" +
    "        try {\n" +
    "            var password = document.getElementById('password').value;\n" +
    "            var html = CryptoJS.AES.decrypt(base64Encrypted, password).toString(CryptoJS.enc.Utf8);\n" +
    "            document.write(html);\n" +
    "            document.dispatchEvent(new Event('DOMContentLoaded'));\n\n" +
    "        } catch (e) {\n" +
    "            console.error(e);\n" +
    "            alert(e);\n" +
    "        }\n" +
    "    }\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>";

function encrypt () {
    var password = $("#password").val();
    myDropzone.getFiles().forEach(function (file) {
        var reader = new FileReader();
        reader.onload = function() {
            var html = reader.result;
            var base64Enc = CryptoJS.AES.encrypt(html, password).toString();
            var html = decHtmlP1 + base64Enc + decHtmlP2;
            saveAs(new Blob([html],{type: 'text/html'}), 'encrypted.html');
        };
        reader.readAsText(file);
    });
}