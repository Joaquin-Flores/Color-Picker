function updateColor() {
    const color = document.getElementById('colorInput').value;
    document.getElementById('colorValue').textContent = color;
    document.getElementById('colorValue').style.color = color;
}
