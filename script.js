const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

if(signUpBtn && signInBtn && container){
  signUpBtn.addEventListener('click', ()=>container.classList.add('right-panel-active'));
  signInBtn.addEventListener('click', ()=>container.classList.remove('right-panel-active'));
}

// Demo submit
document.getElementById('login-form')?.addEventListener('submit', e=>{
  e.preventDefault(); alert('Demo: Sign In');
});
document.getElementById('register-form')?.addEventListener('submit', e=>{
  e.preventDefault(); alert('Demo: Sign Up');
});

// 3D tilt effect - mouse + touch
(function tiltEffect(){
  const card = container;
  if(!card) return;

  function tilt(x, y){
    const rx = (y - card.offsetHeight/2)/card.offsetHeight*10;
    const ry = -(x - card.offsetWidth/2)/card.offsetWidth*10;
    card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  card.addEventListener('mousemove', e=>{
    tilt(e.offsetX, e.offsetY);
  });
  card.addEventListener('mouseleave', ()=>card.style.transform='');

  // Mobile touch tilt
  card.addEventListener('touchmove', e=>{
    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    tilt(touch.clientX - rect.left, touch.clientY - rect.top);
  });
  card.addEventListener('touchend', ()=>card.style.transform='');

  // Swipe for mobile sign in/out
  let startX=0;
  card.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX; });
  card.addEventListener('touchend', e=>{
    const endX = e.changedTouches[0].clientX;
    if(endX - startX > 50) container.classList.remove('right-panel-active'); // swipe right
    if(startX - endX > 50) container.classList.add('right-panel-active'); // swipe left
  });
})();
