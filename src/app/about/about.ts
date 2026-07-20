import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {



pillars = [
  { icon: '✿', title: 'Handcrafted, Always', desc: 'Every petal is piped by hand — no molds, no shortcuts.' },
  { icon: '⟡', title: 'Ingredients First', desc: 'We source premium butter, cream, and seasonal fruit before we design anything.' },
  { icon: '♥', title: 'Made to Feel Something', desc: 'A cake should hold a memory, not just a flavour.' },
];

stats = [
  { value: '2K+', label: 'Cakes Crafted' },
  { value: '5', label: 'Years of Passion' },
  { value: '40+', label: 'Signature Flavours' },
  { value: '98%', label: 'Repeat Clients' },
];
}
