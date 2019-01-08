class Photo {

  constructor(id, title, file, caption, favorite) {
    this.id = id;
    this.title = title;
    this.file = file;
    this.caption = caption;
    this.favorite = favorite || false;
  }


  saveToStorage(imagesArray) {
    localStorage.setItem(this.id, JSON.stringify(this));
  }


  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }


  updatePhoto(newValues, oldValues) {
    if (oldValues === 'card-title') {
      this.title = newValues;
    } else if (oldValues === 'card-caption') {
      this.caption = newValues;
    }
  }

  changeFavoritePhoto() {
    this.favorite = !this.favorite;
  }


}