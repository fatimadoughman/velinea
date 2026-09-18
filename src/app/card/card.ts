import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  CartService,
  CartItem
} from '../services/cart.service';


@Component({
  selector: 'app-card',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
get cartTotal(): number {

  return this.cartItems.reduce(
    (total, item) => {

      const price =
        parseFloat(item.price);

      if (isNaN(price)) {
        return total;
      }

      return total +
        (price * item.quantity);

    },
    0
  );

}
  /* =========================================
     CART ITEMS
  ========================================= */

  cartItems: CartItem[] = [];


  /* =========================================
     WHATSAPP
  ========================================= */

  whatsappNumber = '96179423997';


  /* =========================================
     CONSTRUCTOR
  ========================================= */

  constructor(
    private cartService: CartService
  ) {

    this.cartService.cartItems$
      .subscribe(items => {

        this.cartItems = items;

      });

  }


  /* =========================================
     INCREASE QUANTITY
  ========================================= */

  increase(item: CartItem): void {

    this.cartService
      .increaseQuantity(item.id);

  }


  /* =========================================
     DECREASE QUANTITY
  ========================================= */

  decrease(item: CartItem): void {

    this.cartService
      .decreaseQuantity(item.id);

  }


  /* =========================================
     REMOVE ITEM
  ========================================= */

  removeItem(item: CartItem): void {

    this.cartService
      .removeFromCart(item.id);

  }


  /* =========================================
     CLEAR CART
  ========================================= */

  clearCart(): void {

    this.cartService.clearCart();

  }


  /* =========================================
     TOTAL QUANTITY
  ========================================= */

  get totalItems(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  }


  /* =========================================
     WHATSAPP ORDER
  ========================================= */

  orderOnWhatsApp(): void {

    if (!this.cartItems.length) {
      return;
    }


    let message =
      `Hi Velinea! I'd like to order:\n\n`;


    this.cartItems.forEach(item => {

      message +=
        `• ${item.title}\n` +
        `Quantity: ${item.quantity}\n` +
        `Price: ${item.price}\n\n`;

    });


    message +=
      `Please confirm the final price and availability. 💕`;


    const url =
      `https://wa.me/${this.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;


    window.open(
      url,
      '_blank'
    );

  }

}