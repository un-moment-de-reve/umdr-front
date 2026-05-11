import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  pricingItems = [
    {
      title: 'Soin Visage Éclat Instantané',
      description: '45 minutes de revitalisation profonde',
      price: '65€',
      badge: null,
    },
    {
      title: "Rituel Corps \"R'Eve\"",
      description: '90 minutes de modelage et gommage',
      price: '120€',
      badge: null,
    },
    {
      title: 'Mise en Beauté du Regard',
      description: 'Rehaussement et teinture de cils',
      price: '55€',
      badge: null,
    },
    {
      title: 'Manucure Spa',
      description: 'Soin complet des mains et vernis',
      price: '45€',
      badge: null,
    },
    {
      title: 'Escale Massage Relaxant',
      description: '',
      price: '85€',
      badge: 'BEST SELLER',
    },
  ];
}
