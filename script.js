const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBtn?.addEventListener('click', () => {
  container.classList.add('right-panel-active');
  animateOverlay3D();
});
signInBtn?.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
  animateOverlay3D();
});

function animateOverlay3D() {
  const overlay = container.querySelector('.overlay');
  if (!overlay) return;
  overlay.style.transition = 'transform 400ms cubic-bezier(.2,.9,.25,1), filter 220ms';
  overlay.style.filter = 'brightness(1.15) saturate(1.1)';
  setTimeout(() => overlay.style.filter = '', 260);
}

// 3D tilt + subtle floating
(function tilt3D(){
  const card = container;
  if(!card) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2, cy = rect.height/2;
    const dx = (x-cx)/cx, dy = (y-cy)/cy;
    card.style.transform = `translateY(-8px) rotateX(${dy*6}deg) rotateY(${-dx*6}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform='translateY(-6px)');
})();

// Particles background
const canvas = document.createElement('canvas');
canvas.id = 'particles';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<150;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5,
    alpha: Math.random()*0.5+0.2
  });
}

function drawParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x>canvas.width) p.x=0; if(p.x<0) p.x=canvas.width;
    if(p.y>canvas.height) p.y=0; if(p.y<0) p.y=canvas.height;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
