const container = document.querySelector(".container")
makeGrid(16)

function makeGrid(pixels) {
    all_pixels = pixels ** 2;
    for(let i=0; i < all_pixels; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = 400/pixels + "px";
        pixel.style.height = 400/pixels + "px";
        pixel.classList.add('cleared');
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        })
    }
}