const img=document.getElementById('img');
const buttonBox=document.querySelector('#buttonBox');
const ghost=document.querySelectorAll('#ghost');
const follow = document.getElementById('follow');
const odiv=document.querySelector('.main');
const body=document.getElementById('body');
const box=document.getElementById('box');
const Name=document.getElementById('name');
const notThing=document.getElementById('notThing');
const infoModal=document.querySelector("#infoModal");
const github=document.getElementById('github');
const pr=document.getElementById('pr');
const aboutme=document.getElementById('aboutme');

let number=0;
img.onclick=function(){
    img.classList='imgClick';
    buttonBox.classList='buttonBox';
    box.classList='box';
    Name.classList='name';
}

aboutme.onclick=function(){
    pr.classList='none';
    box.classList='box';
}

github.onclick=function(){
    pr.classList='pr';
    box.classList='none';
}

document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    div_x=odiv.getBoundingClientRect().left;
    div_y=odiv.getBoundingClientRect().top;
    if(x>=div_x & x<=div_x+800 & y>=div_y & y<=div_y+400){
        follow.classList='none';
        body.style.cursor='auto';
    }
    else{
        body.style.cursor='none';
        follow.classList='follow';
        follow.style.left = x - 50 + 'px';
        follow.style.top = y - 50 + 'px';
        follow.style.backgroundPosition = -x + 'px ' + -y + 'px';
    }
  });

ghost.forEach(element => {
    div_x=odiv.getBoundingClientRect().left;
    div_y=odiv.getBoundingClientRect().top;
    number+=1;
    element.classList='ghost'+number;
    const set=document.querySelector('.ghost'+number);
    element.addEventListener('click', function(){
        set.src='img/dead.png';
        set.style.opacity=1;
    });
    while (true) {
        x=Math.floor(Math.random() * ((body.getBoundingClientRect().right - 64) + 1));
        y=Math.floor(Math.random() * ((body.getBoundingClientRect().bottom - 64) + 1));
        set.style.left=x+'px';
        set.style.top=y+'px';
        if(x>=div_x-50 & x<=div_x+850 & y>=div_y-50 & y<=div_y+450){
            continue;
        }else{
            break;
        }
    }
});

let close=document.querySelector("#close");
notThing.addEventListener("click", function(){
  infoModal.showModal();
})
close.addEventListener("click", function(){
  infoModal.close();
})


