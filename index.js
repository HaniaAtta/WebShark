/* JavaScript function to generate box shadows */
function multipleBoxShadow(n) {
    let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    for (let i = 2; i <= n; i++) {
        value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    }
    return value;
}

document.getElementById('stars').style.boxShadow = multipleBoxShadow(700);
document.getElementById('stars2').style.boxShadow = multipleBoxShadow(200);
document.getElementById('stars3').style.boxShadow = multipleBoxShadow(100);