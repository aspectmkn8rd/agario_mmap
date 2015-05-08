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