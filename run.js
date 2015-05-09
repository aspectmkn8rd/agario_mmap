var data = p; // breakpoint on :500 in main_out.js

// mmap canvas
if (typeof main_canvas !== 'undefined') {
    document.body.removeChild(mmap_canvas);
}

var mmap_proportion = 5;
var main_canvas = document.getElementById('canvas');
var mmap_canvas = document.createElement('canvas');
mmap_canvas.width = window.innerWidth / mmap_proportion;
mmap_canvas.height = window.innerWidth / mmap_proportion;
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
// =====================================================
function draw_mmap(my, map) {
    var ctx = mmap_canvas.getContext('2d');
    ctx.fillStyle = "#F2FBFF";
    ctx.fillRect(0, 0, mmap_canvas.width, mmap_canvas.width);

    ctx.beginPath();
    pr_x = my.x / map.x;
    pr_y = my.y / map.y;
    ctx.arc(pr_x * mmap_canvas.width, pr_y * mmap_canvas.height / 2, 3, 0, 2 * Math.PI);
    ctx.stroke();
}
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

    draw_mmap(my, map);
}