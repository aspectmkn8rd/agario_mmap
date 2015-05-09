function draw_mmap(me, map, targets) {
    mmap_canvas.width = window.innerWidth / MMAP_PROPORTION;
    mmap_canvas.height = window.innerWidth / MMAP_PROPORTION;
    var ctx = mmap_canvas.getContext('2d');
    ctx.fillStyle = "#F2FBFF";
    ctx.fillRect(0, 0, mmap_canvas.width, mmap_canvas.width);

    ctx.beginPath();
    pr_x = me.x / map.x;
    pr_y = me.y / map.y;
    ctx.arc(
        pr_x * mmap_canvas.width,
        pr_y * mmap_canvas.height,
        me.size / SIZE_DELIM,
        0,
        2 * Math.PI
    );
    ctx.fillStyle = me.color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
        pr_x * mmap_canvas.width,
        pr_y * mmap_canvas.height,
        mmap_canvas.width / 8,
        0,
        2 * Math.PI
    );
    ctx.fillStyle = "#FFFFFF";
    ctx.stroke();

    for (target_id in targets) {
        var target = targets[target_id];
        if (target.isVirus) {
        }
        else {
            ctx.beginPath();
            pr_x = target.x / map.x;
            pr_y = target.y / map.y;
            ctx.arc(
                pr_x * mmap_canvas.width,
                pr_y * mmap_canvas.height,
                target.size / SIZE_DELIM,
                0,
                2 * Math.PI
            );
            ctx.fillStyle = target.color;
            ctx.fill();
        }
    }
}