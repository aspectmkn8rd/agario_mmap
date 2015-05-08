// connect("ws://45.33.103.22:443")

var data = p; // breakpoint on 500 in main_out.js

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
    setNick("mkn8rd");
    var now = new Date();
    var my = {}; // t0d0 my.x, my.y
    var map = {}; // t0d0 map.max_x, map.max_y
    onscrean.innerText = 'x: ' + now.toLocaleString() + ' / ' + '123';
    onscrean.innerText += '\n';
    onscrean.innerText += 'y: ' + now.toLocaleString() + ' / ' + '123';
    onscrean.innerText += '\n';
}