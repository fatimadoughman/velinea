import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-eventplanner',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './eventplanner.html',
  styleUrl: './eventplanner.scss',
})
export class Eventplanner {
  occasions = [
    {
      number: '01',
      title: 'Engagements',
      description:
        'Romantic floral setups, elegant seating areas and personalized details.',
      image: 'eng.jpeg'
    },
    {
      number: '02',
      title: 'Bride To Be',
      description:
        'Luxury wedding décor designed to turn your vision into a timeless celebration.',
      image: 'bride.png'
    },
    {
      number: '03',
      title: 'Birthdays',
      description:
        'Beautiful themes, balloon styling, flowers, cakes and dessert tables.',
      image: 'hap.jpeg'
    },
     {
      number: '04',
      title: 'Buffet',
      description:
        'A wide range of delicious dishes, desserts and drinks for your guests.',
      image: 'buffet.jpeg'
    },
       {
      number: '05',
      title: 'Invitational website link',
      description:
        'We will provide you with a personalized website link for your event, where you can share details, RSVP, and keep your guests informed.',
      image: 'inv.jpeg'
    },
  ];

  services = [
    {
      name: 'Event Setup',
      icon: '✦',
      selected: false
    },
    {
      name: 'Flowers',
      icon: '❀',
      selected: false
    },
    {
      name: 'Buffet',
      icon: '⌒',
      selected: false
    },
    {
      name: 'Desserts',
      icon: '♔',
      selected: false
    },
    {
      name: 'Gifts',
      icon: '◇',
      selected: false
    },
    {
      name: 'Baby Gifts',
      icon: '♡',
      selected: false
    }
  ];

  processSteps = [
    {
      number: '01',
      title: 'Share Your Vision',
      description:
        'Tell us about your occasion, preferred colors, date and budget.'
    },
    {
      number: '02',
      title: 'Receive Your Proposal',
      description:
        'We prepare a personalized concept with recommended services and pricing.'
    },
    {
      number: '03',
      title: 'Customize Every Detail',
      description:
        'Choose the flowers, setup, gifts, buffet and desserts you prefer.'
    },
    {
      number: '04',
      title: 'Celebrate Beautifully',
      description:
        'Our team prepares everything so you can enjoy your special moment.'
    },
      {
      number: '05',
      title: 'Invitational website link',
      description:
        'We will provide you with a personalized website link for your event, where you can share details, RSVP, and keep your guests informed.'
    }
  ];

  plannerForm = {
    name: '',
    phone: '',
    occasion: '',
    eventDate: '',
    guests: null as number | null,
    budget: '',
    colors: '',
    message: ''
  };

  selectOccasion(occasion: string): void {
    this.plannerForm.occasion = occasion;

    document
      .getElementById('planner-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  submitPlannerForm(): void {
    const chosenServices = this.services
      .filter(service => service.selected)
      .map(service => service.name)
      .join(', ');

    const message = `
Hello Velinea,

I would like to request an event proposal.

Name: ${this.plannerForm.name}
Phone: ${this.plannerForm.phone}
Occasion: ${this.plannerForm.occasion}
Event date: ${this.plannerForm.eventDate}
Guests: ${this.plannerForm.guests ?? 'Not specified'}
Budget: ${this.plannerForm.budget || 'Not specified'}
Services: ${chosenServices || 'Not specified'}
Preferred colors: ${this.plannerForm.colors || 'Not specified'}

Vision:
${this.plannerForm.message || 'No additional information'}
    `.trim();

    const whatsappNumber = '96100000000';

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }


  promotions = [
  {
    tier: 'Basic',
    image: 'mir.jpeg',
    includes: ['Event Setup', 'Mirror'],
    badge: null,
    featured: false,
    whatsappText: encodeURIComponent("Hi! I'm interested in the Basic promotion (Setup + Buffet).")
  },
  {
    tier: 'Plus',
    image: 'plus.jpeg',
    includes: ['Event Setup', 'Mirror ', 'Buffet'],
    badge: null,
    featured: false,
    whatsappText: encodeURIComponent("Hi! I'm interested in the Plus promotion (Setup + Mirror + Buffet).")
  },
  {
    tier: 'Pro',
    image: '/assets/images/promo-pro.jpg',
    includes: ['Event Setup', 'Mirror ', 'Buffet', 'Digital Invitation Link'],
    badge: 'Most Popular',
    featured: true,
    whatsappText: encodeURIComponent("Hi! I'm interested in the Pro promotion (Setup + Mirror + Buffet + Invitation Link).")
  }
];
}