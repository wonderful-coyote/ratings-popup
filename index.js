// function toggle() {
//     let toggle = document.querySelector('.popup-container')

//     toggle.classList.toggle('toggle');
// }

document.querySelector('.btn').onclick = () => {
    document.querySelector('.popup-container').classList.add('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('.popup-container').classList.remove('active');
}
