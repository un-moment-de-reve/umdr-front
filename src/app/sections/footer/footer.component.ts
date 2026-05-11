import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  contactItems = [
    { icon: 'container-1.svg', alt: 'Adresse', content: "12 Rue du Luxe, 33000 Bordeaux", href: '#' },
    { icon: 'container-15.svg', alt: 'Téléphone', content: '05 56 00 00 00', href: 'tel:0556000000' },
    { icon: 'container-17.svg', alt: 'Email', content: 'contact@institut-reve.fr', href: 'mailto:contact@institut-reve.fr' },
  ];

  openingHours = [
    { day: 'Lundi', hours: '14h - 19h' },
    { day: 'Mar - Ven', hours: '09h - 19h' },
    { day: 'Samedi', hours: '09h - 17h' },
    { day: 'Dimanche', hours: 'Fermé' },
  ];

  informationLinks = [
    { label: 'Mentions Légales', href: '#' },
    { label: 'Politique de Confidentialité', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Recrutement', href: '#' },
  ];
}
