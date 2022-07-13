function getColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getString(length = 8, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    var result = "";
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function getNumber(min = 0, max = 100) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}
function stringJoin(string1, string2, preference = 0.5) {
    if(!string1) throw new Error("string1 is required value")
    if(!string2) throw new Error("string2 is required value")
    let s1 = string1.split("")
    let s2 = string2.split("")
    for (let i = 0; i < ((s1.length <= s2.length) ? s1.length : s2.length); i++) {
        if(Math.random() < preference) {
            s1[i] = s2[i]
        }
    }
    return s1.join("")
}


module.exports = {getColor, getString, stringJoin}