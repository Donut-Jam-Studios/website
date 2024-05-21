
const svg = document.getElementById("an")
const warp = new Warp(svg)

warp.interpolate(4)
warp.transform(([x, y]) => [x, y, y])

let offset = 0
function animate() {
    warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 20 + offset), oy])
    offset += 0.01
    requestAnimationFrame(animate)
}

animate()