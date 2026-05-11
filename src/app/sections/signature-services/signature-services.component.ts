import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signature-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signature-services.component.html',
})
export class SignatureServicesComponent {
  services = [
    {
      title: 'Soins du visage',
      description: 'Analyses de peau personnalisées et soins régénérants de haute précision.',
      imageSrc: 'container-10.svg',
      imageAlt: 'Soins du visage',
    },
    {
      title: 'Corps & Silhouette',
      description: "Gommages, enveloppements et techniques de modelage pour une peau sublimée.",
      imageSrc: 'container-13.svg',
      imageAlt: 'Corps et silhouette',
    },
    {
      title: 'Mise en Beauté',
      description: 'Extensions de cils et rehaussement pour un regard intense et naturel.',
      imageSrc: 'container-16.svg',
      imageAlt: 'Mise en beauté',
    },
    {
      title: 'Massages',
      description: 'Rituels de relaxation profonde inspirés des meilleures traditions mondiales.',
      imageSrc: 'container-2.svg',
      imageAlt: 'Massages',
    },
    {
      title: 'Manucure',
      description: 'Soin des mains et pose de vernis semi-permanent pour une finition parfaite.',
      imageSrc: 'container-7.svg',
      imageAlt: 'Manucure',
    },
    {
      title: 'Épilation',
      description: 'Techniques douces et cires premium pour une douceur longue durée.',
      imageSrc: 'container-11.svg',
      imageAlt: 'Épilation',
    },
  ];
}
