var albumButton = document.querySelector('album-btn');
var input = document.querySelector('input');
var photoGallery = document.querySelector('.images');
var imagesArr = JSON.parse(localStorage.getItem('photos')) || [];
var reader = new FileReader();

window.addEventListener('load', appendPhotos);
albumButton.addEventListener('click', createElement);

function appendPhotos() {
  imagesArr.forEach(function (photo) {
    photoGallery.innerHTML += `<img src=${photo.file} />`
  })
}

function createElement() {
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]); 
    reader.onload = addPhoto
  }
}

function addPhoto(e) {
  // console.log(e.target.result);
  var newPhoto = new Photo(Date.now(), e.target.result);
  photoGallery.innerHTML += `<img src=${e.target.result} />`;
  imagesArr.push(newPhoto)
  newPhoto.saveToStorage(imagesArr)
}