import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../../../../../models/product";
import { MessengerService } from "../../../../../../services/messenger.service";
import { CartService } from "../../../../../../services/cart.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  constructor(
    private message: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  handleAddToCart() {
    this.cartService
      .addProductToCart(this.product)
      .subscribe(() => this.message.sendMessage(this.product));
  }
}
