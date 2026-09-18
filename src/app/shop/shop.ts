import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CartService,
  Product
} from '../services/cart.service';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {


  /* =========================================
     SEARCH + CATEGORY
  ========================================= */

  searchTerm = '';

  selectedCategory = 'All';


  /* =========================================
     PROMO SLIDER
  ========================================= */

  promoIndex = 0;


  /* =========================================
     CART SERVICE
  ========================================= */

  constructor(
    private cartService: CartService
  ) {}


  /* =========================================
     PRODUCTS
  ========================================= */

  products: Product[] = [

    {
      id: 1,
      title: 'Book Bouquet',
      tag: 'A Gift for Every Book Lover',
      category: 'Gifts',
      price: '25+',
      image: 'books.jpeg'
    },

    {
      id: 2,
      title: 'Baby Gift Crate',
      tag: 'Welcome Little One',
      category: 'Gifts',
      price: '90+',
      image: 'baby.png'
    },

    {
      id: 3,
      title: 'Luxury Gift Basket',
      tag: 'Thoughtfully Curated',
      category: 'Gifts',
      price: 'Customized',
      image: 'bask1.jpeg'
    },

    {
      id: 4,
      title: 'Luxury Floral Gift Box',
      tag: 'Elegant Surprises',
      category: 'Gifts',
      price: 'Customized',
      image: 'gift1.jpeg'
    },

    {
      id: 5,
      title: 'Beauty Gift Basket',
      tag: 'Luxury Collection',
      category: 'Gifts',
      price: '30+',
      image: 'gist2.jpeg'
    },

    {
      id: 6,
      title: '7 Roses Cupcake Bouquet',
      tag: 'Opening Offer',
      category: 'Flowers',
      price: 'Customized',
      image: 'bouq.jpeg'
    },



  ];


  /* =========================================
     CATEGORIES
  ========================================= */

  categories: string[] = [
    'All',
    ...new Set(
      this.products.map(
        product => product.category
      )
    )
  ];


  /* =========================================
     SELECT CATEGORY
  ========================================= */

  selectCategory(category: string): void {

    this.selectedCategory = category;

  }


  /* =========================================
     FILTER PRODUCTS
  ========================================= */

  get filteredProducts(): Product[] {

    const search =
      this.searchTerm
        .trim()
        .toLowerCase();


    return this.products.filter(product => {


      /* SEARCH */

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search)

        ||

        product.tag
          .toLowerCase()
          .includes(search);


      /* CATEGORY */

      const matchesCategory =
        this.selectedCategory === 'All'

        ||

        product.category ===
          this.selectedCategory;


      return (
        matchesSearch &&
        matchesCategory
      );

    });

  }


  /* =========================================
     CLEAR FILTERS
  ========================================= */

  clearFilters(): void {

    this.searchTerm = '';

    this.selectedCategory = 'All';

  }


  /* =========================================
     ADD TO CART
  ========================================= */

  addToCart(product: Product): void {

    this.cartService.addToCart(product);

    console.log(
      'Added to cart:',
      product.title
    );

  }


  /* =========================================
     PROMO SLIDES
  ========================================= */

  
promoSlides = [
  {
    id: 1,
    image: 'homepa.png',
    small: 'Made With Love',
    title: 'Gifts That Feel Special',
    description: 'Beautiful details for every unforgettable moment.',
    button: 'SHOP NOW'
  },
  {
    id: 2,
    image: '',
    small: 'Velinea Flowers',
    title: 'Say It With Flowers',
    description: 'Elegant bouquets made for the people you love.',
    button: 'EXPLORE'
  },
  {
    id: 3,
    image: '',
    small: 'Your Special Day',
    title: 'Celebrate Beautifully',
    description: 'Elegant details designed for unforgettable events.',
    button: 'DISCOVER'
  },
  {
    id: 4,
    image: '',
    small: 'Something Special',
    title: 'Made Just For You',
    description: 'Discover gifts created to make every moment sweeter.',
    button: 'SHOP NOW'
  }
];

  /* =========================================
     PROMO ACTION
  ========================================= */

  promoAction(): void {

    const products =
      document.querySelector(
        '.shop-grid-section'
      );


    products?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }

}