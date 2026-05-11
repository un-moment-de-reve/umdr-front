import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-navigation.component.html',
})
export class TopNavigationComponent {
  navItems = ['EXPERTISE', 'SERVICES', 'TARIFS', 'GALERIE', 'AVIS'];
}
