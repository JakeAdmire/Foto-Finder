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
// ------------------------------------------------------------

var cardGallery = document.querySelector(".card-container");
var imagesArray = JSON.parse(localStorage.getItem('keys')) || [];
var reader = new FileReader();


window.addEventListener('load', appendPhotos);
albumButton.addEventListener('click', createElement);

window.onload = function() {
  var keys = Object.keys(localStorage);
  console.log(keys.length);
  for (var i = 0; i < keys.length; i++) {
    var parseObj = JSON.parse(localStorage.getItem(keys[i]));
    var newPhoto = new Photo(parseObj.id, parseObj.title, parseObj.file, parseObj.caption);
    imagesArray.push(newPhoto);
    appendPhotos(newPhoto);
  }
}

function appendPhotos(photo) {
  cardGallery.innerHTML += 
  `<article class="card ease" data-id="${photo.id}">
      <section class="card-title">
        <h4>${photo.title}</h4>
      </section>
      <img src=${photo.file} />
      <section class="card-caption">
        <p>${photo.caption}</p>
      </section>
      <section class="card-footer">
        <svg class="trash-svg point" viewBox="0 0 142.7 150">
          <path class="ease" d="M133.5 18.4h-36c-2-9.7-10.6-17.1-20.9-17.1H66.2c-10.3 0-18.9 7.4-20.8 17.1H9.3c-4.7 0-8.5 3.8-8.5 8.5v10.2c0 4.7 3.8 8.5 8.5 8.5h3.3l5.9 91c0 7 5.6 12.6 12.6 12.6h80.7c7 0 12.6-5.6 12.6-12.6l5.9-91h3.3c4.7 0 8.5-3.8 8.5-8.5V26.9c-.1-4.7-3.9-8.5-8.6-8.5zm-96 121.7h-.4c-2.7 0-4.9-2.1-5.1-4.7l-5.7-83.2c-.2-2.8 1.9-5.2 4.7-5.4 2.8-.2 5.2 1.9 5.4 4.7l5.7 83.2c.3 2.8-1.8 5.2-4.6 5.4zM66.2 11.5h10.4c4.6 0 8.6 2.9 10.2 6.9H55.9c1.7-4 5.7-6.9 10.3-6.9zm-5.9 128.6h-.1c-2.7 0-5-2.2-5.1-5L52.8 52c-.1-2.8 2.1-5.2 5-5.2 2.8-.1 5.2 2.1 5.2 5l2.3 83.2c0 2.7-2.2 5.1-5 5.1zm28-5c0 2.8-2.3 5-5.1 5h-.1c-2.8 0-5.1-2.3-5-5.2l1.1-83.2c0-2.8 2.2-4.9 5.2-5 2.8 0 5.1 2.3 5 5.2l-1.1 83.2zm23 .2c-.1 2.7-2.4 4.8-5.1 4.8h-.3c-2.8-.2-5-2.6-4.8-5.4l4.5-83.2c.2-2.8 2.5-5 5.4-4.8 2.8.2 5 2.6 4.8 5.4l-4.5 83.2z"/>
        </svg>
        <svg class="fave-svg point" viewBox="0 0 163.4 150">
          <path class="ease" d="M148 15.2c-18.3-18.3-47.9-18.5-66.4-.6C63-3.3 33.4-3.1 15.1 15.2c-18.5 18.5-18.5 48.6 0 67.1.5.5 1.1 1 1.6 1.5l64.8 64.8 64.8-64.8c.5-.5 1.1-.9 1.6-1.5 18.6-18.5 18.6-48.5.1-67.1zM30.8 66.7c2.1 2.1 2.1 5.4 0 7.4-1 1-2.4 1.5-3.7 1.5s-2.7-.5-3.7-1.5c-6.8-6.8-10.5-15.7-10.5-25.3s3.7-18.5 10.5-25.3c2.1-2.1 5.4-2.1 7.4 0s2.1 5.4 0 7.4C26 35.7 23.4 42 23.4 48.8s2.7 13.1 7.4 17.9z"/>
        </svg>
      </section>
    </article>`
}

function createElement(e) {
  e.preventDefault();
  if (hiddenInput.files[0]) {
    reader.readAsDataURL(hiddenInput.files[0]); 
    reader.onload = addCard;
  }
}

function addCard(e) {
  var newPhoto = new Photo(Date.now(), titleInput.value, e.target.result, captionInput.value);
  console.log(newPhoto);
  imagesArray.push(newPhoto);
  newPhoto.saveToStorage();
  appendPhotos(newPhoto);
}


