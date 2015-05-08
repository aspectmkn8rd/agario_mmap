var data = p; // breakpoint on :500 in main_out.js

function cloneCanvas(old_canvas) {
    var new_canvas = document.createElement('canvas');
    var ctx = new_canvas.getContext('2d');
    var proportion = 7;
    new_canvas.width = old_canvas.width / proportion;
    new_canvas.height = new_canvas.width;
    ctx.drawImage(old_canvas, 0, 0);
    return new_canvas;
}

// mmap canvas
if (typeof main_canvas !== 'undefined') {
    document.body.removeChild(mmap_canvas);
}

var main_canvas = document.getElementById('canvas');
var mmap_canvas = cloneCanvas(main_canvas);
mmap_canvas.id = 'mmap_canvas';
mmap_canvas.style.position = 'fixed';
mmap_canvas.style.right = 0;
mmap_canvas.style.bottom = 0;
mmap_canvas.style.whiteSpace = 'pre';
document.body.appendChild(mmap_canvas);

// =====================================================
// onscrean console
if (typeof onscrean !== 'undefined') {
}
else {
    var onscrean = document.createElement('div');
    document.body.appendChild(onscrean);
}
onscrean.style.position = 'fixed';
onscrean.style.left = 0;
onscrean.style.top = 0;
onscrean.style.whiteSpace = 'pre';
onscrean.innerHTML = "";
// =====================================================

// intervals
if (typeof interval_ids !== 'undefined') {
}
else {
    var interval_ids = [];
}

for (var i = 0; i < interval_ids.length; i++) {
    clearInterval(interval_ids[i]);
}
var interval_id = setInterval(function () {
    run();
}, 50);
interval_ids.push(interval_id);
// =====================================================

function run() {
    setRegion("SETTINGS_REGION");
    setNick("SETTINGS_NICKNAME");
    setShowMass("SETTINGS_SHOW_MASS");
    var map = {
        'x': K,
        'y': L
    };
    var my = m[0];
    onscrean.innerText = 'x: ' + my.x + ' / ' + map.x;
    onscrean.innerText += '\n';
    onscrean.innerText += 'y: ' + my.y + ' / ' + map.y;
    onscrean.innerText += '\n';
}