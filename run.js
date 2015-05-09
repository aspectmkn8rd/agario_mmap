// breakpoint on :500 in main_out.js

// #include onscrean_console.coffee
// #include mmap.js

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

function run() {
    setRegion("SETTINGS_REGION");
    setNick("SETTINGS_NICKNAME");
    setShowMass("SETTINGS_SHOW_MASS");

    var map = {'x': K, 'y': L};
    var me = m[0];
    var targets = w;

    update_onscrean_console(me);
    draw_mmap(me, map, targets);
}