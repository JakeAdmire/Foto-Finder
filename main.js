var albumButton = document.querySelector(".album-btn");
var hiddenInput = document.querySelector(".hide-input");
var uploadButton = document.querySelector(".upload-btn");
var titleInput = document.querySelector(".title-input");
var captionInput = document.querySelector(".caption-input");


// Change text of file select button to file name
hiddenInput.addEventListener("change", changeUploadText);
function changeUploadText() {
  uploadButton.innerText = hiddenInput.files[0].name;
}

// Enable addToAlbumButton when text is in the form
titleInput.addEventListener("keyup", enableUpload);
captionInput.addEventListener("keyup", enableUpload);


// ---------- SHOULD THIS BE TWO DIFFERENT FUNCTIONS?
function enableUpload() {
 if (titleInput.value.length > 0 && captionInput.value.length > 0) {
  albumButton.classList.remove("disabled");
  albumButton.disabled = false;
 } else {
  albumButton.classList.add("disabled");
  albumButton.disabled = true;
 }
}















// ------------------------------------------------------------

var photoGallery = document.querySelector('.images');
var imagesArr = JSON.parse(localStorage.getItem('photos')) || [];
var reader = new FileReader();


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