MMAP_PROPORTION = 4.5
SIZE_DELIM = 40

if main_canvas?
  document.body.removeChild(mmap_canvas)

main_canvas = document.getElementById('canvas')
mmap_canvas = document.createElement('canvas')
mmap_canvas.width = window.innerWidth / MMAP_PROPORTION
mmap_canvas.height = window.innerWidth / MMAP_PROPORTION
mmap_canvas.id = 'mmap_canvas'
mmap_canvas.style.border = "black 1px solid"
mmap_canvas.style.position = 'fixed'
mmap_canvas.style.right = 10
mmap_canvas.style.bottom = 10
mmap_canvas.style.whiteSpace = 'pre'
document.body.appendChild(mmap_canvas)

draw_mmap = (me, map, targets) ->
  mmap_canvas.width = window.innerWidth / MMAP_PROPORTION
  mmap_canvas.height = window.innerWidth / MMAP_PROPORTION
  ctx = mmap_canvas.getContext('2d')
  ctx.fillStyle = "#454C4D"
  ctx.fillRect(0, 0, mmap_canvas.width, mmap_canvas.width)

  me_x = me.x / map.x
  me_y = me.y / map.y

  # white circle around me
  ctx.beginPath()
  ctx.arc(
    me_x * mmap_canvas.width,
    me_y * mmap_canvas.height,
    mmap_canvas.width / 8,
    0,
    2 * Math.PI
  )
  ctx.fillStyle = "#F2FBFF"
  ctx.fill()

  # me
  ctx.beginPath()
  ctx.arc(
    me_x * mmap_canvas.width,
    me_y * mmap_canvas.height,
    me.size / SIZE_DELIM,
    0,
    2 * Math.PI
  )
  ctx.fillStyle = me.color
  ctx.fill()

  # others
  for target_id, target of targets
    pr_x = target.x / map.x
    pr_y = target.y / map.y
    if not target.isVirus
      ctx.beginPath()
      ctx.arc(
        pr_x * mmap_canvas.width,
        pr_y * mmap_canvas.height,
        target.size / SIZE_DELIM,
        0,
        2 * Math.PI
      )
      ctx.fillStyle = target.color
      ctx.lineWidth = 5
      ctx.strokeStyle = '#FFFFFF'
      ctx.fill()
    else
      ctx.beginPath()
      ctx.arc(
        pr_x * mmap_canvas.width,
        pr_y * mmap_canvas.height,
        target.size / SIZE_DELIM,
        0,
        2 * Math.PI
      )
      ctx.fillStyle = target.color
      ctx.lineWidth = 5
      ctx.strokeStyle = '#FFFFFF' # t0d0 virus special border
      ctx.fill()