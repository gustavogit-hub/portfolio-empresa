AOS.init();

// efeito antes/depois ao passar o mouse
document.querySelectorAll('.compare').forEach(box => {
  box.addEventListener('mousemove', e => {
    const width = box.offsetWidth;
    const x = e.offsetX;
    box.querySelector('.after').style.width = x + "px";
  });
});