function App() {
  let width, height;
  const canvas = document.getElementById('canvas'), context = canvas.getContext('2d');
  const NUM_BUBBLES = 25;
  const bubbles = [];
  let cscale = chroma.scale([chroma.random(), chroma.random()]);
  init();
  function init() {
    onResize();
    window.addEventListener('resize', onResize, false);
    for (let i = 0; i < NUM_BUBBLES; i++) {
      initBubble(i);
    }
    document.addEventListener('click', () => {
      cscale = chroma.scale([chroma.random(), chroma.random()]);
    });
    animate();
  }
  function initBubble(i) {
    if (!bubbles[i]) bubbles[i] = { i };
    const b = bubbles[i],
      r = 1 + rnd() * 5,
      x = rnd() * width,
      dx = rnd();
    b.r = r;
    b.x = x - dx;
    b.y = height + r * 5;
    b.color = ((cscale()).alpha(rnd(0.5, 0.8)));
    const tweenx = gsap.to(b, {
      duration: 1 + rnd() * 2,
      x: b.x + dx,
      repeat: -1,
      yoyo: true,
      ease: Power0.easeNone
    });
    gsap.to(b, {
      duration: b.r * 1,
      y: -b.r,
      ease: Power2.easeIn,
      // ease: Power0.easeNone,
      onCompleteParams: [b, tweenx],
      onComplete: function (b) {
        tweenx.kill();
        initBubble(b.i);
      }
    });
  }
  function drawBubble(b) {
    context.beginPath();
    context.arc(b.x, b.y, b.r, 0, 2 * Math.PI, false);
    context.fillStyle = b.color;
    context.fill();
    // context.beginPath();
    // context.arc(b.x, b.y, b.r + 2, 0, 2 * Math.PI, false);
    // context.lineWidth = 1;
    // context.strokeStyle = b.color;
    // context.stroke();
  }
  function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < NUM_BUBBLES; i++) {
      drawBubble(bubbles[i]);
    }
  }
  function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width; canvas.height = height;
  }
  function rnd(min, max) {
    if (min === undefined) { min = 0; }
    if (max === undefined) { max = 1; }
    return Math.random() * (max - min) + min;
  }
}
App();
