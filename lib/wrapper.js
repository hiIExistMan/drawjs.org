window.onload = () => {
  try {
    init();
  } catch (e) {
    console.log("No init function found.");
  }

  try {
    function loop() {
      requestAnimationFrame(loop);
      draw();
    }
  } catch (e) {
    console.log("No draw loop found");
  }
}
