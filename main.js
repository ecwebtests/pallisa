


//HOME PAGE HERO SECTION
const sliderContainer =document.querySelector('.slider');
const slides=document.querySelectorAll('.slide');
const caption=document.querySelectorAll('.caption');

let index=0;
let interval;

function showSlides(i){
  slides.forEach((slide,index)=>{
    slide.classList.remove('active','exit');
    if (index===i){
      slide.classList.add('active');
    }else if(index<i){
      slide.classList.add('exit');
    }

  });
  
  caption.forEach((caption)=>{
    caption.classList.remove('active');
  });

  caption[i].classList.add('active');
  slides[i].classList.add('active');
}

function changeSlides(step){
  index=(index + step +slides.length)%slides.length;
  showSlides(index);
}

function  AutoRotateSlides(){
  interval= setInterval(()=>changeSlides(1),7000);
}

AutoRotateSlides();


//CHANGING TEXT ON CALL TO ACTION BUTTON
const words =["Success","Excellence","Brilliance"];
let indexx=0;
const changeText=document.getElementById('changingText');

    function changeWord(){
      changeText.style.opacity=0;
      setTimeout(()=>{
        changeText.textContent=words[indexx];
        changeText.style.opacity=1;
        indexx++;

        if(indexx>=words.length){
          indexx=0;
        }
      },400)
    }
    changeWord()
setInterval(changeWord,4000)