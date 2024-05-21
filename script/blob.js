
const desBlob = document.getElementById("desBlob");
const warpDes = new Warp(desBlob);

const headerBlob = document.getElementById("headerBlob");
const warpHeader = new Warp(headerBlob);

warpDes.interpolate(4);
warpDes.transform(([x, y]) => [x, y, y]);

warpHeader.interpolate(4);
warpHeader.transform(([x, y]) => [x, y, y]);

let offset = 0;
function animate() {
    warpDes.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 50 + offset), oy]);
    warpHeader.transform(([x, y, oy]) => [x, oy + 1 * Math.sin(x / 10 + offset), oy]);
    offset += 0.01;
    requestAnimationFrame(animate);
};

animate();