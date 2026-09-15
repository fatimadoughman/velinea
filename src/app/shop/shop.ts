import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  title: string;
  tag: string;
  category: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {

  whatsappNumber = '96179423997';

  marqueeItems: string[] = [
    'Limited Edition',
    'Handcrafted Fresh',
    'Made to Order',
    'While Supplies Last'
  ];

  products: Product[] = [

{
    title: 'Book Bouquet',
    tag: 'A Gift for Every Book Lover',
    category: 'Gifts',
    price: '25+',
    image: 'books.jpeg'
  },
  {
    title: 'Baby Gift Crate',
    tag: 'Welcome Little One',
    category: 'Gifts',
    price: '90+',
    image: 'baby.png'
  },
  {
    title: 'Luxury Gift Basket',
    tag: 'Thoughtfully Curated',
    category: 'Gifts',
    image: 'bask1.jpeg',
    price: ''
  },
{
  title: 'Luxury Floral Gift Box',
  tag: 'Elegant Surprises',
  category: 'Gifts',
  price: 'customized',
  image: 'gift1.jpeg'
},
{
  title: 'Beauty Gift Basket',
  tag: 'Luxury Collection',
  category: 'Gifts',
  price: '30+',
  image: 'gist2.jpeg'
},

{
  title: '7 Roses Cupcake Bouquet',
  tag: 'Opening Offer',
  category: 'Flowers',


  image: 'bouq.jpeg',
  price: ''
},
  {
    title: '7 Roses cupcake Bouquet',
    tag: 'Opening Offer',
    category: 'Flowers',


    image: 'bouq1.jpeg',
    price: ''
  },

  ];

  // built from the products above, plus an "All" option pinned first
  categories: string[] = ['All', ...new Set(this.products.map(p => p.category))];

  activeCategory = 'All';
  searchTerm = '';

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesCategory = this.activeCategory === 'All' || product.category === this.activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }

  clearFilters() {
    this.activeCategory = 'All';
    this.searchTerm = '';
  }

  orderProduct(product: Product) {
    const message = `Hi Velinea! I'd like to order: ${product.title} ($${product.price})`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  promoIndex = 0;


promoSlides = [
  {
    image: 'homepa.png',
    small: 'Made With Love',
    title: 'Gifts That Feel Special',
    description: 'Beautiful details for every unforgettable moment.',
    button: 'SHOP NOW'
  },

  {
    image: 'promo2.jpeg',
    small: 'Velinea Flowers',
    title: 'Say It With Flowers',
    description: 'Elegant bouquets made for the people you love.',
    button: 'EXPLORE'
  },

  {
    image: 'promo3.jpeg',
    small: 'Your Special Day',
    title: 'Celebrate Beautifully',
    description: 'Elegant details designed for unforgettable events.',
    button: 'DISCOVER'
  },

  {
    image: 'promo4.jpeg',
    small: 'Something Special',
    title: 'Made Just For You',
    description: 'Discover gifts created to make every moment sweeter.',
    button: 'SHOP NOW'
  }
];

promoAction(promo: any) {
  console.log('Promo clicked:', promo);
}
}