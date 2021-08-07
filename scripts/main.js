var body = document.body;
var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

console.log("6984698278738489")

function universe(e) {
    console.log(e.keyCode);
}

body.addEventListener('keydown', universe, false)

// function decode(ciphertext) {return CryptoJS.AES.decrypt(ciphertext, key, { iv: iv }).toString(CryptoJS.enc.Utf8);}