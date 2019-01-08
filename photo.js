class Photo {

  constructor(id, title, file, caption) {
    this.id = id;
    this.title = title;
    this.file = file;
    this.caption = caption;
  }


  saveToStorage(imagesArray) {
    localStorage.setItem(this.id, JSON.stringify(this));
  }


  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }


  updatePhoto() {

  }


}