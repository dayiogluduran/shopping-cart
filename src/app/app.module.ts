import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavComponent } from "./components/shared/nav/nav.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { FiltersComponent } from "./components/shopping-cart/components/filters/filters.component";
import { ProductListComponent } from "./components/shopping-cart/components/product-list/product-list.component";
import { CartComponent } from "./components/shopping-cart/components/cart/cart.component";
import { CartItemComponent } from "./components/shopping-cart/components/cart/components/cart-item/cart-item.component";
import { ProductItemComponent } from "./components/shopping-cart/components/product-list/components/product-item/product-item.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
