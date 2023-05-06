const img=document.querySelector('#img');
const buttonBox=document.querySelector('#buttonBox');
img.onclick=function(){
    img.classList='imgClick'
    buttonBox.classList='buttonBox';
}

document.addEventListener('mousemove', function(e) {
    const follow = document.getElementById('follow');
    const odiv=document.querySelector('.main');
    let x = e.clientX;
    let y = e.clientY;
    div_x=odiv.getBoundingClientRect().left
    div_y=odiv.getBoundingClientRect().top
    if(x>=div_x & x<=div_x+800 & y>=div_y & y<=div_y+400){
        follow.classList='none'
    }
    else{
        follow.classList='follow'
        follow.style.left = x - 50 + 'px';
        follow.style.top = y - 50 + 'px';
    }
  });
