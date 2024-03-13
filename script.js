const buttonBox=document.querySelector('#buttonBox');
const infoModal=document.querySelector("#infoModal");
const notThing=document.getElementById('notThing');
const aboutme=document.getElementById('aboutme');
const ghost=document.querySelectorAll('#ghost');
const follow=document.getElementById('follow');
const amount=document.getElementById('amount');
const github=document.getElementById('github');
const close=document.querySelector("#close");
const body=document.getElementById('body');
const Name=document.getElementById('name');
const odiv=document.querySelector('.main');
const img=document.getElementById('img');
const box=document.getElementById('box');
const pr=document.getElementById('pr');

let number=0;
let gamount=0;

img.onclick=function(){
    if (img.classList=='img') {
        box.classList='box';
        Name.classList='name';
        amount.classList='amount';
    }
    img.classList='imgClick';
    buttonBox.classList='buttonBox';
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
    let div_x=odiv.getBoundingClientRect().left;
    let div_y=odiv.getBoundingClientRect().top;
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
        gamount+=1;
        set.classList="none";
        document.getElementById('dead'+gamount).classList='';
    });
    while (true) {
        let x=Math.floor(Math.random() * ((body.getBoundingClientRect().right - 64) + 1));
        let y=Math.floor(Math.random() * ((body.getBoundingClientRect().bottom - 64) + 1));
        set.style.left=x+'px';
        set.style.top=y+'px';
        if(x>=div_x-50 & x<=div_x+850 & y>=div_y-50 & y<=div_y+450){
            continue;
        }else{
            break;
        }
    }
});

notThing.addEventListener("click", function(){
  infoModal.showModal();
  infoModal.className="";
})
close.addEventListener("click", function(){
  infoModal.className="none";
  infoModal.close();
})
