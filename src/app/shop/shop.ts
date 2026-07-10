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
      title: 'Rose Velvet Cake',
      tag: 'Best Seller',
      category: 'Cakes',
      sub: 'Signature flower cake, 1kg',
      price: '45',
      // TODO: replace with your uploaded product photo path, e.g. 'assets/shop/rose-velvet.jpg'
      image: 'vill.jpg'
    },
    {
      title: 'Blush Cookies Box',
      tag: 'New',
      category: 'Cookies',
      sub: 'Box of 12 handcrafted cookies',
      price: '18',
      image: 'vill2.jpeg'
    },
    {
      title: 'Velinea Sweet Bites',
      tag: 'Limited',
      category: 'Sweet Bites',
      sub: 'Assorted mini treats, 24 pcs',
      price: '25',
      image: 'vill.jpg'
    },
    {
      title: 'Classic Wine Cake',
      tag: 'Signature',
      category: 'Cakes',
      sub: 'Rich dark chocolate cake, 1.2kg',
      price: '50',
      image: 'vill2.jpeg'
    }
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