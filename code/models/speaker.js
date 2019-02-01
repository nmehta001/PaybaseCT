class Speaker {
  constructor(data) {
    if (!data) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
  }
}
