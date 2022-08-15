document.getElementById("btn").addEventListener("click", function () {
    const min_width = document.getElementById('min-width').value;
    const max_width = document.getElementById('max-width').value;
    const min_val = document.getElementById('min-value').value;
    const max_val = document.getElementById('max-value').value;
    const slope = (max_val - min_val) / (max_width - min_width);
    let k = min_val - (slope * min_width);
    let str;
    if (k >= 0) {
        str = `clamp(${min_val}rem, ${(100 * slope).toFixed(3)}vw + ${k.toFixed(3)}rem, ${max_val}rem)`;
    } else {
        k -= (2 * k);
        str = `clamp(${min_val}rem, ${(100 * slope).toFixed(3)}vw - ${k.toFixed(3)}rem, ${max_val}rem)`;
    }
    const formula = document.getElementById("formula");
    formula.childNodes[4]?.remove();
    formula.childNodes[3]?.remove();
    const p = document.createElement("p");
    const strtextnode = document.createTextNode(str);
    const br = document.createElement("br");
    const btn = document.createElement("button");
    const copy = document.createTextNode("Copy");
    const copied = document.createTextNode("Copied!");
    p.appendChild(strtextnode);
    formula.appendChild(p);
    btn.classList.add("btn");
    btn.appendChild(copy);
    formula.appendChild(btn);
    btn.addEventListener("click", function () {
        navigator.clipboard.writeText(str);
        formula.appendChild(br);
        formula.appendChild(copied);
        setTimeout(function () {
            formula.removeChild(br);
            formula.removeChild(copied);
        }, 500);
    });
});