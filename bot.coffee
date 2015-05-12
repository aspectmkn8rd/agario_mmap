bot = (me, map, targets) ->
  canvas = main_canvas

  offX = map.x
  offY = map.y

  mX = Math.abs(canvas.clientWidth / 2 + offX)
  mY = Math.abs(canvas.clientHeight / 2 + offY)

  canvas.onmousemove({clientX: mX, clientY: mY})