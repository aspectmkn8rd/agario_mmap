var data = p; // breakpoint on :500 in main_out.js

// mmap canvas
if (typeof main_canvas !== 'undefined') {
    document.body.removeChild(mmap_canvas);
}

var MMAP_PROPORTION = 4.5;
var SIZE_DELIM = 40; // t0d0

var main_canvas = document.getElementById('canvas');
var mmap_canvas = document.createElement('canvas');
mmap_canvas.width = window.innerWidth / MMAP_PROPORTION;
mmap_canvas.height = window.innerWidth / MMAP_PROPORTION;
mmap_canvas.id = 'mmap_canvas';
mmap_canvas.style.border = "black 1px solid";
mmap_canvas.style.position = 'fixed';
mmap_canvas.style.right = 10;
mmap_canvas.style.bottom = 10;
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

// #include mmap.js

function run() {
    setRegion("SETTINGS_REGION");
    setNick("SETTINGS_NICKNAME");
    setShowMass("SETTINGS_SHOW_MASS");

    var map = {'x': K, 'y': L};
    var me = m[0];
    var targets = w;

    onscrean.innerText = 'me.x: ' + me.x + '\n';
    onscrean.innerText += 'me.y: ' + me.y + '\n';

    draw_mmap(me, map, targets);
}