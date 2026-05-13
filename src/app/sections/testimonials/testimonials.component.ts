import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  customerSince: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote:
        'Les gestes sont précis, enveloppants et très relaxants. On sent une réelle maîtrise et une vraie bienveillance. L’institut est propre, cosy et parfait pour se ressourcer.',
      name: 'Manon L.',
      customerSince: '2025-12-01',
      rating: 5,
    },
    {
      quote:
        'Je vais toujours dans ce salon avec une belle décoration. Toujours contente de mes ongles et des autres prestations!',
      name: 'Alexina C.',
      customerSince: '2021-12-04',
      rating: 5,
    },
    {
      quote:
        'Très professionnelle et sympathique. Son salon est très propre. Un plaisir partagé depuis des années.',
      name: 'Angélique J.',
      customerSince: '2021-12-04',
      rating: 5,
    },
    {
      quote:
        'Professionnalisme, bonne humeur et réel intérêt des prestations bien faites sont au rendez-vous.',
      name: 'Marie M.',
      customerSince: '2025-12-12',
      rating: 5,
    },
  ];

  getStars(rating: number): number[] {
    return Array.from({ length: rating });
  }

  getCustomerDuration(customerSince: string): string {
    const startDate = new Date(customerSince);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (currentDate.getDate() < startDate.getDate()) {
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if (years <= 0 && months <= 0) {
      return 'Cliente fidèle depuis peu';
    }

    if (years <= 0) {
      return `Cliente fidèle depuis ${months} ${months > 1 ? 'mois' : 'mois'}`;
    }

    if (months <= 0) {
      return `Cliente fidèle depuis ${years} ${years > 1 ? 'ans' : 'an'}`;
    }

    return `Cliente fidèle depuis ${years} ${years > 1 ? 'ans' : 'an'}`;
  }
}