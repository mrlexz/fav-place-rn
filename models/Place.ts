interface Location {
  long: number;
  lat: number;
}

export interface IPlace {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id: string;
}
class Place {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id: string;
  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: Location,
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}

export default Place;
