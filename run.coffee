# breakpoint on :500 in main_out.js

### include onscrean_console.coffee ###
### include mmap.coffee ###

if interval_ids?
  for i in interval_ids
    window.clearInterval i
else
  interval_ids = []

interval_id = window.setInterval(->
  run()
, 50)
interval_ids.push interval_id

run = () ->
  setRegion("SETTINGS_REGION")
  setNick("SETTINGS_NICKNAME")
  setShowMass("SETTINGS_SHOW_MASS")

  map =
    x: K,
    y: L
  me = m[0]
  targets = w

  update_onscrean_console(me)
  draw_mmap(me, map, targets)