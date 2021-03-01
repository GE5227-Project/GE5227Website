const overlayShiyun = document.querySelector('.overlay-shiyun');
const overlayWenling = document.querySelector('.overlay-wenling');
const overlayYujun = document.querySelector('.overlay-yujun');
const overlayJeremias = document.querySelector('.overlay-jeremias');
const popupShiyun = document.querySelector('.popup-shiyun');
const popupWenling = document.querySelector('.popup-wenling');
const popupYujun = document.querySelector('.popup-yujun');
const popupJeremias = document.querySelector('.popup-jeremias');
const cover = document.querySelector('.cover');
const close = document.querySelectorAll('.close');

var activePerson;  //requires bugfixing for this
var activeUrl;
var popupOpen = false;

overlayShiyun.addEventListener('click', () => {
    storeActivePerson(popupShiyun);
    storeActiveUrl('about_us.html#Ho Shi Yun');
    openPopup();  
});
overlayWenling.addEventListener('click', () => {
    storeActivePerson(popupWenling);
    storeActiveUrl('about_us.html#Lyu Wenling');
    openPopup();
});
overlayYujun.addEventListener('click', () => {
    storeActivePerson(popupYujun);
    storeActiveUrl('about_us.html#Hou Yujun');
    openPopup();
});
overlayJeremias.addEventListener('click', () => {
    storeActivePerson(popupJeremias);
    storeActiveUrl('about_us.html#Liew Jeremias');
    openPopup();
});

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', closePopup);
}

cover.addEventListener('click', closePopup);

function storeActivePerson(person) {
    activePerson = person;
}

function storeActiveUrl(url) {
    activeUrl = url;
}

function openPopup() {
    if (popupOpen == false) {
        popupOpen = true;
        cover.classList.toggle('fade');
        activePerson.classList.toggle('fade');
    }  
}
function closePopup() {
    if (popupOpen == true) {
        popupOpen = false;
        cover.classList.toggle('fade');
        activePerson.classList.toggle('fade');
    }  
}

 function visitPage(){
     window.location=activeUrl;
}