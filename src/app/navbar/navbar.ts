
import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  CartService,
  CartItem
} from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar {
marqueeItems: string[] = [
  'Free Delivery all over lebanon',
  'discount up to 40%',
  'Free Delivery all over lebanon',
];
  isMenuOpen = signal(false);

  scrollProgress = signal(0);

  isScrolled = signal(false);

  navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'EventPlanner', path: '/eventplanner' },
    { label: 'About', path: '/about' },
  ];


  @HostListener('window:scroll')
  onScroll() {

    const scrollTop = window.scrollY;

    const docHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    this.scrollProgress.set(
      Math.round((scrollTop / docHeight) * 100)
    );

    this.isScrolled.set(scrollTop > 20);
  }


  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
  cartCount = 0;



constructor(
  private cartService: CartService
) {

  this.cartService.cartItems$
    .subscribe(items => {

      this.cartCount = items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      );

    });

}

  

}