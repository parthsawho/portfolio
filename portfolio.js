const TypeWriter=function(txtElement,words,wait=3000) 
{
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait,10);
    this.type();
    this.isDeleting=false;
}

//Typewriter method
TypeWriter.prototype.type=function()
{
    const current=this.wordIndex % this.words.length;
    const fullTxt=this.words[current];

    if(this.isDeleting){
        this.txt=fullTxt.substring(0,this.txt.length - 1);
    }
    else{
        //add
        this.txt=fullTxt.substring(0,this.txt.length + 1);
    }

    //insert ele
    this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;

    let typeSpeed=300;

    if(this.isDeleting){
        typeSpeed/=2;
    }
    if(!this.isDeleting && this.txt===fullTxt){
        typeSpeed=this.wait;
        this.isDeleting=true;
    }

    else if(this.isDeleting && this.txt===''){
        this.isDeleting=false;
        this.wordIndex++;
    }

    setTimeout(()=>this.type(),500);

}

document.addEventListener('DOMContentLoaded',init);
//Init App
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words=JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait);

}





//Change of background color while scrolling

function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('active');
    }

    else{
        navbar.classList.add('active');
    }

}

window.addEventListener('scroll', changeBg);

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();