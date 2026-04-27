


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







(function () {

  const galleryImages =
    document.querySelectorAll('.gallery__item img');

  const galleryModal =
    document.getElementById('lightbox');

  const galleryImage =
    document.getElementById('lightboxImage');

  const galleryClose =
    document.querySelector('.gallery-modal__close');

  const galleryNext =
    document.querySelector('.gallery-modal__nav.next');

  const galleryPrev =
    document.querySelector('.gallery-modal__nav.prev');

  const galleryCounter =
    document.getElementById('galleryCounter');

  let currentIndex = 0;

  const imageList =
    Array.from(galleryImages)
      .map(img => img.src);


  // =========================
  // SHOW IMAGE
  // =========================

  function showImage(index) {

    currentIndex = index;

    galleryImage.src =
      imageList[index];

    galleryCounter.textContent =
      `${index + 1} / ${imageList.length}`;

  }


  // =========================
  // OPEN
  // =========================

  galleryImages.forEach((img, index) => {

    img.addEventListener('click', () => {

      galleryModal.classList.add('show');

      showImage(index);

      document.body.classList.add('no-scroll');

    });

  });


  // =========================
  // CLOSE
  // =========================

  galleryClose.addEventListener('click', () => {

    galleryModal.classList.remove('show');

    document.body.classList.remove('no-scroll');

  });


  // =========================
  // NEXT
  // =========================

  galleryNext.addEventListener('click', () => {

    currentIndex =
      (currentIndex + 1)
      % imageList.length;

    showImage(currentIndex);

  });


  // =========================
  // PREVIOUS
  // =========================

  galleryPrev.addEventListener('click', () => {

    currentIndex =
      (currentIndex - 1 + imageList.length)
      % imageList.length;

    showImage(currentIndex);

  });


  // =========================
  // SWIPE SUPPORT
  // =========================

  let startX = 0;

  galleryModal.addEventListener('touchstart', e => {

    startX = e.touches[0].clientX;

  });

  galleryModal.addEventListener('touchend', e => {

    let endX =
      e.changedTouches[0].clientX;

    if (startX - endX > 50)
      galleryNext.click();

    if (endX - startX > 50)
      galleryPrev.click();

  });

})();



// Function to close modal______________________________________________________________
        function closeModal() {
            document.getElementById('contactModal').classList.add('hidden');
            document.body.style.overflow='auto';
        }

        // Close modal when clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Function to open modal 
        function openModal() {
            document.getElementById('contactModal').classList.remove('hidden');
            document.body.style.overflow='hidden';
        }
        document.querySelectorAll("#callbutton")
        .forEach(button=>{
          button.addEventListener("click", function(e) {
            e.preventDefault();
            openModal();
        });
        });


