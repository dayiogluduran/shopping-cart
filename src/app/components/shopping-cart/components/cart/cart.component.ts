import { Component, OnInit } from "@angular/core";
import { MessengerService } from "../../../../services/messenger.service";
import { Product } from "../../../../models/product";
import { CartService } from "../../../../services/cart.service";
import { CartItem } from "../../../../models/cart";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  cartTotal = 0;

  constructor(
    private message: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.message.getMessage().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateCartTotal();
    });
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => (this.cartTotal += item.qty * item.price));
  }
}
