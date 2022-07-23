const container = document.querySelector(".container")
const reset = document.querySelector(".reset")
const change = document.querySelector(".change")
const size = document.querySelector(".size")

let pixels = 16
makeGrid(pixels)

function makeGrid(pixels) {
    all_pixels = pixels ** 2;
    for (let i = 0; i < all_pixels; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = 400 / pixels + "px";
        pixel.style.height = 400 / pixels + "px";
        pixel.classList.add('cleared');
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "#aaa";
        })
    }
}

reset.addEventListener('click', (e) => {
    container.innerText = "";
    makeGrid(pixels);
})

change.addEventListener('click', (e) => {
    pixels = size.value;
    container.innerText = "";
    makeGrid(pixels)
})