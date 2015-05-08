// connect("ws://45.33.103.22:443")
// setNick("mkn8rd")

var data = p; // breakpoint on 500 in main_out.js

// =============================

setInterval(function () {
    run();
}, 50);

function logArrayElements(element, index, array) {
    sizes += element.size + ' ';
}

function run() {
    sizes = [];
    data.forEach(logArrayElements);
    console.log(sizes); // t0d0 make it to div in body instead
}