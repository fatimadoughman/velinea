
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReviewService } from '../services/review';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule, RouterLink, FormsModule]
})

export class Home implements AfterViewInit, OnDestroy {
  isSubmitting: boolean | undefined;

constructor(private reviewService: ReviewService) {}
async ngOnInit() {
  const reviews = await this.reviewService.getReviews();

  if (reviews.length > 0) {
    this.testimonials = reviews as any[];
  }
}
async addReview() {
  if (!this.newReview.name.trim() || !this.newReview.quote.trim()) return;

  this.isSubmitting = true;

  const review = {
    quote: this.newReview.quote,
    name: this.newReview.name,
    role: 'Customer',
    init: this.newReview.name.charAt(0).toUpperCase(),
    rating: Number(this.newReview.rating)
  };

  try {
    await this.reviewService.addReview(review);

    this.testimonials.unshift(review);
    this.testimonialIndex = 0;

    this.newReview = {
      name: '',
      quote: '',
      rating: 5
    };

    this.closeReviewModal();
  } finally {
    this.isSubmitting = false;
  }
}
  @ViewChild('cursorDot') cursorDot!: ElementRef<HTMLDivElement>;
  @ViewChild('cursorRing') cursorRing!: ElementRef<HTMLDivElement>;

  isScrolled = false;
  testimonialIndex = 0;

  private timer?: number;
  private animationId?: number;
  private observer?: IntersectionObserver;

  private mx = 0;
  private my = 0;
  private rx = 0;
  private ry = 0;

  marqueeItems = [
    'Celebration Cakes',
    'Floral Gifts',
    'Gift Boxes',
    'Custom Orders',
    'Flower Cakes',
    'Wedding Tiers',
    'Birthday Specials',
    'Corporate Gifting',
    'Celebration Cakes',
    'Floral Gifts',
    'Gift Boxes',
    'Custom Orders'
  ];

  cards = [
    {
      title: ' Cupcake Boquites',
      sub: 'For every milestone',
      tag: 'Bestseller',
      image: 'boq.jpg'
    },
    {
      title: 'Floral Gifts',
      sub: 'Blooms & sweetness',
      tag: 'New',
      image: 'cup.jpg'
    },
    {
      title: 'Gift Boxes',
      sub: 'Curated with love',
      tag: 'Popular',
      image: 'vil.jpeg'
    }
  ];

  features = [
    {
      icon: '✦',
      title: 'Artisan Crafted',
      desc: 'Each piece is hand-designed with beautiful detail and love.'
    },
    {
      icon: '🌿',
      title: 'Finest Ingredients',
      desc: 'Premium ingredients for beautiful and delicious creations.'
    },
    {
      icon: '🎁',
      title: 'Custom Orders',
      desc: 'Tell us your vision and we will bring it to life.'
    },
    {
      icon: '◎',
      title: 'Fresh Daily',
      desc: 'Every order is prepared fresh for your special moment.'
    }
  ];


petalPaths = [
  'M10,0 C14,3 14,7 10,10 C6,13 2,11 0,7 C-2,3 2,0 10,0Z',
  'M8,0 C12,2 13,8 8,11 C3,14 -1,9 1,4 C3,0 6,-1 8,0Z',
  'M6,0 C11,0 14,5 11,9 C8,13 2,13 0,8 C-2,4 2,0 6,0Z'
];

petals = Array.from({ length: 28 }, (_, i) => {
  const duration = 9 + Math.random() * 7;
  const delay = -Math.random() * duration;

  return {
    id: i,
    path: this.petalPaths[i % this.petalPaths.length],
    size: 10 + Math.random() * 10,
    svgAnimation: `petalSway ${3 + Math.random() * 3}s ${delay}s ease-in-out infinite alternate`,
    style: {
      left: `${Math.random() * 100}%`,
      '--petal-dur': `${duration}s`,
      '--petal-delay': `${delay}s`,
      '--petal-sway': `${3 + Math.random() * 3}s`
    }
  };
});





  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mx = event.clientX;
    this.my = event.clientY;
  }


ngAfterViewInit(): void {
  this.startCursor();
  this.startRevealObserver();

  setInterval(() => {
    this.nextTestimonial(false);
  }, 4000);
}

  ngOnDestroy(): void {
    if (this.timer) window.clearInterval(this.timer);
    if (this.animationId) window.cancelAnimationFrame(this.animationId);
    this.observer?.disconnect();
  }

  startCursor(): void {
    const animate = () => {
      this.rx += (this.mx - this.rx) * 0.12;
      this.ry += (this.my - this.ry) * 0.12;

      if (this.cursorDot && this.cursorRing) {
        this.cursorDot.nativeElement.style.left = `${this.mx}px`;
        this.cursorDot.nativeElement.style.top = `${this.my}px`;

        this.cursorRing.nativeElement.style.left = `${this.rx}px`;
        this.cursorRing.nativeElement.style.top = `${this.ry}px`;
      }

      this.animationId = window.requestAnimationFrame(animate);
    };

    animate();
  }

  startRevealObserver(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach(el => {
      this.observer?.observe(el);
    });
  }

  startTestimonials(): void {
    this.timer = window.setInterval(() => {
      this.nextTestimonial(false);
    }, 5000);
  }

  resetTimer(): void {
    if (this.timer) window.clearInterval(this.timer);
    this.startTestimonials();
  }





newReview = {
  name: '',
  quote: '',
  rating: 5
};


testimonials = [
  {
    quote: 'I have ordered before launching the website and I was very satisfied with the quality of the products and the service. I highly recommend this bakery to anyone looking for delicious treats!',
    name: 'Rita',
    role: 'Regular Customer',
    init: 'R',
    rating: 5
  },
    {
    quote: 'كنت ناطرة ليفتحو واطلب لماما وعنجد كتير انبسطت بالبوكيه',
    name: 'Sarah',
    role: 'Regular Customer',
    init: 'S',
    rating: 5
  }
];


showReviewModal = false;

openReviewModal() {
  this.showReviewModal = true;
}

closeReviewModal() {
  this.showReviewModal = false;
}

showSubscribeSuccess = false;

closeSuccessPopup() {
  this.showSubscribeSuccess = false;
}
prevTestimonial() {
  this.testimonialIndex =
    (this.testimonialIndex - 1 + this.testimonials.length) %
    this.testimonials.length;
}

nextTestimonial(p0: boolean) {
  this.testimonialIndex =
    (this.testimonialIndex + 1) % this.testimonials.length;
}

goTestimonial(i: number) {
  this.testimonialIndex = i;
}
subscriberEmail = '';

isSubscribing = false;

async subscribe() {
  if (!this.subscriberEmail.trim()) return;

  this.isSubscribing = true;

    await this.reviewService.addSubscriber(this.subscriberEmail);

this.showSubscribeSuccess = true;
    this.subscriberEmail = '';
    // await emailjs.send(
//   'service_ogsj9ur',
//   'template_wwfpnjj',
//   {
//     email: this.subscriberEmail,
//     to_email: this.subscriberEmail
//   },
//   'rhXDWRyv2BHQAgzbm'
// );
  //   alert('Thank you for subscribing!');
  // } catch (error) {
  //   console.error(error);
  //   alert('Something went wrong. Please try again.');
  // } finally {
  //   this.isSubscribing = false;
  // }
  }}
