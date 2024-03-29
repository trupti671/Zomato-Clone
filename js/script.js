var left=document.getElementById('right');
var right=document.getElementById('left');
var slider=document.getElementById('slider');

var left2=document.getElementById('right2');
var right2=document.getElementById('left2');
var slider2=document.getElementById('slider2');

var t=1;
var x=0;

var t2=1;
var x2=0;

left.addEventListener('click', ()=>{
    if(t==1)
    {
        x=-t*190;
        slider.style.marginLeft=x+"px";
        t++;
    }else if(t==2)
    {
        x=-t*190;
        slider.style.marginLeft=x+"px";
        t++;
    }else if(t==3)
    {
        x=-t*190;
        slider.style.marginLeft=x+"px";
        t++;
    }else if(t==4)
    {
        x=-t*190;
        slider.style.marginLeft=x+"px";
        t++;
    }else if(t==5)
    {
        x=-t*190;
        slider.style.marginLeft=x+"px";
        t++;
    }
    else if(t==6)
    {
        x=-t*190;
        slider.style.marginLeft=x+"px";
        // t++;
    }
    
})

left2.addEventListener('click', ()=>{
    if(t2==1)
    {
        x2=-t2*190;
        slider2.style.marginLeft=x2+"px";
        t2++;
    }else if(t2==2)
    {
        x2=-t2*190;
        slider2.style.marginLeft=x2+"px";
        t2++;
    }else if(t2==3)
    {
        x2=-t2*190;
        slider2.style.marginLeft=x2+"px";
        t2++;
    }else if(t2==4)
    {
        x2=-t2*190;
        slider2.style.marginLeft=x2+"px";
        t2++;
    }else if(t2==5)
    {
        x2=-t2*190;
        slider2.style.marginLeft=x2+"px";
        t2++;
    }
    else if(t2==6)
    {
        x2=-t2*190;
        slider2.style.marginLeft=x2+"px";
        // t++;
    }
    
})

right.addEventListener('click', ()=>{
    if(t==2)
    {
        x=(t-2)*190;
        slider.style.marginLeft=x+"px";
        t--;
    }else if(t==3)
    {
        x=(t-4)*190;
        slider.style.marginLeft=x+"px";
        t--;
    }else if(t==4)
    {
        x=(t-6)*190;
        slider.style.marginLeft=x+"px";
        t--;
    }else if(t==5)
    {
        x=(t-8)*190;
        slider.style.marginLeft=x+"px";
        t--;
    }
    else if(t==6)
    {
        x=(t-10)*190;
        slider.style.marginLeft=x+"px";
        t--;
    }
    
})

right2.addEventListener('click', ()=>{
    if(t2==2)
    {
        x2=(t2-2)*190;
        slider2.style.marginLeft=x2+"px";
        t2--;
    }else if(t2==3)
    {
        x2=(t2-4)*190;
        slider2.style.marginLeft=x2+"px";
        t2--;
    }else if(t2==4)
    {
        x2=(t2-6)*190;
        slider2.style.marginLeft=x2+"px";
        t2--;
     }
    
})


var dropdown_main=document.getElementById('dropdown-main');
var cuisines=document.getElementById('cuisines');
var c=0;

cuisines.addEventListener('click', ()=>{
    
    if(c==0)
    {
        dropdown_main.style.display="block";
        c++;
    }else{
        dropdown_main.style.display="none";
        c--;
    }
})


var q1_main=document.getElementById('q1_main');
var qb1=document.getElementById('qb1');

var t1=0;

q1_main.addEventListener('click', ()=>{
    if(t1==0)
    {
        q1_main.style.height="max-content";
        qb1.style.transform="rotate(180deg)";
        t1++;
    }else{
        q1_main.style.height="65px";
        qb1.style.transform="rotate(0deg)";
        t1--;
    }
    
})

var q2_main=document.getElementById('q2_main');
var qb2=document.getElementById('qb2');

var t4=0;

q2_main.addEventListener('click', ()=>{
    if(t4==0)
    {
        q2_main.style.height="max-content";
        qb2.style.transform="rotate(180deg)";
        t4++;
    }else{
        q2_main.style.height="65px";
        qb2.style.transform="rotate(0deg)";
        t4--;
    }
    
})

var q3_main=document.getElementById('q3_main');
var qb3=document.getElementById('qb3');

var t5=0;

q3_main.addEventListener('click', ()=>{
    if(t5==0)
    {
        q3_main.style.height="max-content";
        qb3.style.transform="rotate(180deg)";
        t5++;
    }else{
        q3_main.style.height="65px";
        qb3.style.transform="rotate(0deg)";
        t5--;
    }
    
})

var q4_main=document.getElementById('q4_main');
var qb4=document.getElementById('qb4');

var t6=0;

q4_main.addEventListener('click', ()=>{
    if(t6==0)
    {
        q4_main.style.height="max-content";
        qb4.style.transform="rotate(180deg)";
        t6++;
    }else{
        q4_main.style.height="65px";
        qb4.style.transform="rotate(0deg)";
        t6--;
    }
    
})

var login_full=document.getElementById('login_full');
var btn1=document.getElementById('btn1');
var lg_cross=document.getElementById('lg_cross');

btn1.addEventListener('click', ()=>{
        login_full.style.display="flex";
})

lg_cross.addEventListener('click', ()=>{
    login_full.style.display="none";
})


var signup_full=document.getElementById('signup_full');
var btn2=document.getElementById('btn2');
var s_cross=document.getElementById('s_cross');

btn2.addEventListener('click', ()=>{
        signup_full.style.display="flex";
})

s_cross.addEventListener('click', ()=>{
    signup_full.style.display="none";
})