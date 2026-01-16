const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').innerHTML = `last Modified: ${document.lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', ()=>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});