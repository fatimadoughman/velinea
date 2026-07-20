import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  title: string;
  tag: string;
  category: string;
  sub: string;
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

  // TODO: replace with your real WhatsApp business number, country code + number, no + or spaces
  // e.g. Lebanon number 03 123 456 -> '9613123456'
  whatsappNumber = '96176382904';

  marqueeItems: string[] = [
    'Limited Edition',
    'Handcrafted Fresh',
    'Made to Order',
    'While Supplies Last'
  ];

  products: Product[] = [

  {
    title: '50 Roses Bouquet',
    tag: 'Opening Offer',
    category: 'Flowers',
    sub: '50 premium roses • Available in any color you choose',
    price: '45',
  
    image: 'boqu2.png'
  },
  
  {
    title: '100 Roses Bouquet',
    tag: 'Opening Offer',
    category: 'Flowers',
    sub: '100 premium roses • Available in any color you choose',
    price: '90',

    image: 'boqu1.JPG'
  },
  {
    title: '500 Roses Bouquet',
    tag: 'Luxury Collection',
    category: 'Flowers',
    sub: '500 premium roses • Available in any color you choose',
    price: '450',
    image: 'boqu3.png'
  },

  {
    title: 'Custom Bouquet',
    tag: 'Create Your Own',
    category: 'Flowers',
    sub: 'Choose any number of roses, colors, wrapping, and accessories',
    price: '15+',
  
    image: 'boqu4.png'
  }
,{
    title: 'Book Bouquet',
    tag: 'A Gift for Every Book Lover',
    category: 'Gifts',
    sub: 'A unique bouquet featuring your favorite books beautifully arranged with premium flowers and elegant wrapping. Perfect for birthdays, graduations, anniversaries, or any special occasion.',
    price: '25+',
    image: 'books.jpeg'
  },
  {
    title: 'Baby Gift Crate',
    tag: 'Welcome Little One',
    category: 'Baby Gifts',
    sub: 'A beautifully arranged wooden crate filled with adorable baby essentials, soft toys, flowers, and personalized decorations. Customize the name, colors, clothing, and accessories.',
    price: '90+',
    image: 'baby1.jpeg'
  },
  {
    title: 'Luxury Gift Basket',
    tag: 'Thoughtfully Curated',
    category: 'Gift Baskets',
    sub: 'A premium gift basket filled with luxury skincare, beauty products, flowers, and elegant decorations. Perfect for birthdays, bridal showers, Mother’s Day, or corporate gifting.',
    price: '35+',
    image: 'bask1.jpeg'
  },
  ];

  // built from the products above, plus an "All" option pinned first
  categories: string[] = ['All', ...new Set(this.products.map(p => p.category))];

  activeCategory = 'All';
  searchTerm = '';

  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.products.filter(product => {
      const matchesCategory =
        this.activeCategory === 'All' || product.category === this.activeCategory;

      const matchesSearch =
        !term ||
        product.title.toLowerCase().includes(term) ||
        product.sub.toLowerCase().includes(term);

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
}