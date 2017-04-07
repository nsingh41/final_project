let titl=document.getElementById('title')
let ingre=document.getElementById('ingre')
let direc=document.getElementById('direc')
let img=document.getElementById('img1')
let button1=document.getElementById('button')
button1.addEventListener('click',add)
 function add(){
    
    let x=titl.value;
    let y=ingre.value;
    let z=direc.value;
    let a=img.src;
    localStorage.setItem('h1',x);
    localStorage.setItem('h2',y);
    localStorage.setItem('h3',z);
    localStorage.setItem('h4',a);

    
    
    let disp=document.getElementById('display')

     let h1=document.createElement("h1")
    h1.textContent=localStorage.getItem('h1');

    
    let h2=document.createElement("h2")
    h2.textContent=localStorage.getItem('h2');

    let h3=document.createElement("h3")
    h3.textContent=localStorage.getItem('h3');

    let img2=document.createElement("img")
    img2.src=localStorage.getItem('h4');




   disp.appendChild(h1);
   disp.appendChild(h2);
   disp.appendChild(h3);
   disp.appendChild(img2);


 }



window.onload=function(){
     let disp=document.getElementById('display')

     let h1=document.createElement("h1")
    h1.textContent=localStorage.getItem('h1');

    
    let h2=document.createElement("h2")
    h2.textContent=localStorage.getItem('h2');

    let h3=document.createElement("h3")
    h3.textContent=localStorage.getItem('h3');

    let img2=document.createElement("img")
    img2.src=localStorage.getItem('h4');




   disp.appendChild(h1);
   disp.appendChild(h2);
   disp.appendChild(h3);
   
}

