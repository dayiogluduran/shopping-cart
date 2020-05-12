export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id,
    name,
    description = "",
    price = 0,
    imageUrl = "https://www.jaipuriaschoolgida.in/wp-content/uploads/2016/11/blank-img.jpg"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
