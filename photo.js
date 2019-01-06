class Photo {

  constructor(id, file) {
    this.id = id;
    this.file = file;
  }


  saveToStorage(imagesArray) {
    localStorage.setItem('photos', JSON.stringify(imagesArr));
  }


  deleteFromStorage() {

  }


  updatePhoto() {

  }


}