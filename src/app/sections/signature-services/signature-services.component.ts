import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LucideArrowRight,
  LucideBrush,
  LucideHand,
  LucideUserRound,
  LucideSmile,
  LucideSparkles,
} from '@lucide/angular';

interface SignatureService {
  title: string;
  description: string;
  icon: 'smile' | 'user-round' | 'brush' | 'hand' | 'sparkles';
}

@Component({
  selector: 'app-signature-services',
  standalone: true,
  imports: [
    CommonModule,
    LucideArrowRight,
    LucideSparkles,
    LucideSmile,
    LucideBrush,
    LucideHand,
    LucideUserRound,
  ],
  templateUrl: './signature-services.component.html',
})
export class SignatureServicesComponent {
  services: SignatureService[] = [
    {
      title: 'Soins du visage',
      description:
        'Analyses de peau personnalisées et soins régénérants de haute précision.',
      icon: 'smile',
    },
    {
      title: 'Corps & Silhouette',
      description:
        'Gommages, enveloppements et techniques de modelage pour une peau sublimée.',
      icon: 'user-round',
    },
    {
      title: 'Mise en Beauté',
      description:
        'Extensions de cils et rehaussement pour un regard intense et naturel.',
      icon: 'brush',
    },
    {
      title: 'Manucure',
      description:
        'Soin des mains et pose de vernis semi-permanent pour une finition parfaite.',
      icon: 'hand',
    },
    {
      title: 'Épilation',
      description:
        'Techniques douces et cires premium pour une douceur longue durée.',
      icon: 'sparkles',
    },
  ];
}