document.getElementById("btn").addEventListener("click", function () {
    const min_width = document.getElementById('min-width').value;
    const max_width = document.getElementById('max-width').value;
    const min_val = document.getElementById('min-value').value;
    const max_val = document.getElementById('max-value').value;
    const slope = (max_val - min_val) / (max_width - min_width);
    const k = min_val - (slope * min_width);
    let str;
    if (k >= 0) {
        str = `clamp(${min_val}rem, ${(100 * slope).toFixed(3)} vw + ${k.toFixed(3)} rem, ${max_val}rem)`;
    } else {
        str = `clamp(${min_val}rem, ${(100 * slope).toFixed(3)} vw ${k.toFixed(3)} rem, ${max_val}rem)`;
    }
    const node = document.createElement("p");
    const textnode = document.createTextNode(str);
    node.appendChild(textnode);
    console.log(node);
    document.getElementById("formula").appendChild(node);
});
