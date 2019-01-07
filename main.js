var albumButton = document.querySelector(".album-btn");
var uploadButton = document.querySelector(".hide-input");
var uploadLabel = document.querySelector(".upload-btn");
var photoGallery = document.querySelector('.images');
var imagesArr = JSON.parse(localStorage.getItem('photos')) || [];
var reader = new FileReader();

uploadButton.addEventListener("change", changeUploadText);
function changeUploadText() {
  uploadLabel.innerText = uploadButton.files[0].name;
}



window.addEventListener('load', appendPhotos);
albumButton.addEventListener('click', createElement);

function appendPhotos() {
  imagesArray.forEach(function (photo) {
    photoGallery.innerHTML += `<img src=${photo.file} />`
  })
}

function createElement() {
  if (uploadButton.files[0]) {
    reader.readAsDataURL(input.files[0]); 
    reader.onload = addPhoto
  }
}

function addPhoto(e) {
  var newPhoto = new Photo(Date.now(), e.target.result);
  photoGallery.innerHTML += `<img src=${e.target.result} />`;
  imagesArray.push(newPhoto)
  newPhoto.saveToStorage(imagesArr)
}