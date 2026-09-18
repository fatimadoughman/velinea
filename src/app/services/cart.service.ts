import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


/* =========================================
   PRODUCT
========================================= */

export interface Product {
  id: number;
  title: string;
  tag: string;
  category: string;
  price: string;
  image: string;
}


/* =========================================
   CART ITEM
========================================= */

export interface CartItem extends Product {
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* =========================================
     CART DATA
  ========================================= */

  private cartItems: CartItem[] = [];


  /* =========================================
     CART OBSERVABLE
  ========================================= */

  private cartSubject =
    new BehaviorSubject<CartItem[]>([]);

  cartItems$ =
    this.cartSubject.asObservable();


  /* =========================================
     ADD TO CART
  ========================================= */

  addToCart(product: Product): void {

    const existingItem =
      this.cartItems.find(
        item => item.id === product.id
      );


    if (existingItem) {

      existingItem.quantity++;

    } else {

      this.cartItems.push({
        ...product,
        quantity: 1
      });

    }


    this.updateCart();
  }


  /* =========================================
     INCREASE QUANTITY
  ========================================= */

  increaseQuantity(productId: number): void {

    const item =
      this.cartItems.find(
        item => item.id === productId
      );


    if (!item) {
      return;
    }


    item.quantity++;

    this.updateCart();
  }


  /* =========================================
     DECREASE QUANTITY
  ========================================= */

  decreaseQuantity(productId: number): void {

    const item =
      this.cartItems.find(
        item => item.id === productId
      );


    if (!item) {
      return;
    }


    if (item.quantity > 1) {

      item.quantity--;

    } else {

      this.removeFromCart(productId);
      return;

    }


    this.updateCart();
  }


  /* =========================================
     REMOVE PRODUCT
  ========================================= */

  removeFromCart(productId: number): void {

    this.cartItems =
      this.cartItems.filter(
        item => item.id !== productId
      );


    this.updateCart();
  }


  /* =========================================
     CLEAR CART
  ========================================= */

  clearCart(): void {

    this.cartItems = [];

    this.updateCart();
  }


  /* =========================================
     GET CART ITEMS
  ========================================= */

  getCartItems(): CartItem[] {

    return this.cartItems;

  }


  /* =========================================
     CART COUNT
  ========================================= */

  getCartCount(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  }


  /* =========================================
     UPDATE CART
  ========================================= */

  private updateCart(): void {

    this.cartSubject.next([
      ...this.cartItems
    ]);

  }

}