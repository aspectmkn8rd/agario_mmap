# breakpoint on :500 in main_out.js

### include onscrean_console.coffee ###
### include mmap.coffee ###

if window.interval_ids?
  for i in window.interval_ids
    clearInterval i
else
  window.interval_ids = []
window.interval_id = setInterval(->
  run()
, 50)
window.interval_ids.push window.interval_id

run = () ->
  setRegion("SETTINGS_REGION")
  setNick("SETTINGS_NICKNAME")
  setShowMass("SETTINGS_SHOW_MASS")

  map =
    x: G,
    y: H
  me = m[0]
  targets = p

  update_onscrean_console(me)
  draw_mmap(me, map, targets)