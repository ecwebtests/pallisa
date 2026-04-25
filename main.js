


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


//IMAGE COURSEL FOR ACTIVITIES
const track=document.querySelector(".extra_track");
const cards=document.querySelectorAll(".extra_card");
const nextButton=document.querySelector(".next");
const previousButton=document.querySelector(".prev");
let startindex=0;
let startX=0;

//Cards per view
const cardsPerview =()=> 
  window.innerWidth<=768?1:
  window.innerWidth<=1024?2:3;


  //Updating Slider
function updateButtons(){
  const maxindex=cards.length-cardsPerview();
  //Disable button at the end
  previousButton.disabled=startindex===0;
  nextButton.disabled=startindex===maxindex;
}


//Move Slider
function moveSlider(){
  const width=cards[0].offsetWidth + 24;
  track.style.transform=`translateX(-${startindex*width}px)`;
  updateButtons();
}

//Naigation buttons
nextButton.addEventListener('click',()=>{
  if(startindex < cards.length - cardsPerview()){
    startindex++;
    moveSlider();
  }
});
previousButton.addEventListener('click',()=>{
  if(startindex>0)
    startindex--;
  moveSlider();
});


//TOUCH WAPPING USING THE FINGER
track.addEventListener('touchstart',e=>startX=e.touches[0].clientX);
track.addEventListener('touchend',e=>{
  const diff=startX-e.changedTouches[0].clientX;
  if(diff>50 && startindex<cards.length-cardsPerview())
    startindex++;

  if(diff<-50 && startindex>0)
    index--;
  moveSlider();
});


updateButtons();
window.addEventListener('resize',moveSlider);