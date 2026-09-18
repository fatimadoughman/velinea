import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface EventService {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

interface EventFeature {
  id: number;
  icon: string;
  title: string;
}@Component({
  selector: 'app-eventplanner',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './eventplanner.html',
  styleUrl: './eventplanner.scss',
})
export class Eventplanner {
 
  services: EventService[] = [

    {
      id: 1,
      number: '01',
      title: 'Weddings',
      description:
        'Elegant celebrations designed from the first detail to the final moment.',
      image: 'wedding1.jpeg'
    },

    {
      id: 2,
      number: '02',
      title: 'Engagements',
      description:
        'Beautiful engagement settings created around your style, colors and story.',
      image: 'engagement1.jpeg'
    },

    {
      id: 3,
      number: '03',
      title: 'Proposals',
      description:
        'Romantic proposal experiences designed to make the moment unforgettable.',
      image: 'proposal1.jpeg'
    },

    {
      id: 4,
      number: '04',
      title: 'Bride-to-Be',
      description:
        'Personalized celebrations created especially for the bride and her favorite people.',
      image: 'bride1.jpeg'
    },

    {
      id: 5,
      number: '05',
      title: 'Private Events',
      description:
        'Birthdays, dinners and intimate celebrations transformed into beautiful experiences.',
      image: 'private1.jpeg'
    }

  ];


  /* =========================================
     EVENT FEATURES
  ========================================= */

  eventFeatures: EventFeature[] = [

    {
      id: 1,
      icon: '✦',
      title: 'Floral Design'
    },

    {
      id: 2,
      icon: '✦',
      title: 'Tables & Chairs'
    },

    {
      id: 3,
      icon: '✦',
      title: 'Table Styling'
    },

    {
      id: 4,
      icon: '✦',
      title: 'Backdrops'
    },

    {
      id: 5,
      icon: '✦',
      title: 'Candles'
    },

    {
      id: 6,
      icon: '✦',
      title: 'Dance Floor'
    },

    {
      id: 7,
      icon: '✦',
      title: 'Lighting'
    },

    {
      id: 8,
      icon: '✦',
      title: 'Sound System'
    },

    {
      id: 9,
      icon: '✦',
      title: 'Zaffeh & Dabke'
    },

    {
      id: 10,
      icon: '✦',
      title: 'Entertainment'
    },

    {
      id: 11,
      icon: '✦',
      title: 'Welcome Drinks'
    },

    {
      id: 12,
      icon: '✦',
      title: 'Photography & Video'
    }

  ];


  /* =========================================
     WHATSAPP
  ========================================= */

  whatsappNumber = '96179423997';


  contactWhatsApp(): void {

    const message =
      `Hi Velinea! I'd like to plan an event with you.`;

    const url =
      `https://wa.me/${this.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      '_blank'
    );

  }

}