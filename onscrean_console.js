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

function update_onscrean_console(me) {
    onscrean.innerText = 'me.x: ' + me.x + '\n';
    onscrean.innerText += 'me.y: ' + me.y + '\n';
}