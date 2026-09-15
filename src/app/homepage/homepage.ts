import { Component } from '@angular/core';


@Component({
  selector: 'app-homepage',
  imports: [ ],
  standalone:true,
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {


   marqueeItems = [
    'Opening Collection',
    'Crazy Deals',
    'Limited Pieces',
    'Shop Velinea',
    'Made For Your Moments'
  ];


  categories = [

    {
      title: 'Flowers',
      image: 'assets/velinea/flowers.jpg'
    },

    {
      title: 'Souvenirs',
      image: 'assets/velinea/souvenirs.jpg'
    },

    {
      title: 'Decoration',
      image: 'assets/velinea/decoration.jpg'
    }

  ];


  featuredProducts = [

    {
      title: 'Signature Arrangement',
      sub: 'A refined floral detail for your special moment.',
      price: 80,
      image: 'assets/velinea/product-1.jpg'
    },

    {
      title: 'Celebration Detail',
      sub: 'A beautiful finishing touch selected by Velinea.',
      price: 45,
      image: 'assets/velinea/product-2.jpg'
    },

    {
      title: 'Opening Collection Piece',
      sub: 'A limited piece from our opening collection.',
      price: 60,
      image: 'assets/velinea/product-3.jpg'
    }

  ];


  moments = [

    {
      title: 'Engagement',
      image: 'assets/velinea/engagement.jpg'
    },

    {
      title: 'Wedding',
      image: 'assets/velinea/wedding.jpg'
    },

    {
      title: 'Proposal',
      image: 'assets/velinea/proposal.jpg'
    }

  ];


  cart: any[] = [];


  addToCart(product: any): void {

    const existingProduct = this.cart.find(
      item => item.title === product.title
    );


    if (existingProduct) {

      existingProduct.quantity++;

    } else {

      this.cart.push({
        ...product,
        quantity: 1
      });

    }


    console.log('Velinea Cart:', this.cart);
  }


  get cartCount(): number {

    return this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

  }


  get cartTotal(): number {

    return this.cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

  }

}
