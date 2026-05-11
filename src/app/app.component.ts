import { Component } from '@angular/core';
import { TopNavigationComponent } from './sections/top-navigation/top-navigation.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SignatureServicesComponent } from './sections/signature-services/signature-services.component';
import { SpaExperienceComponent } from './sections/spa-experience/spa-experience.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { BookingCtaComponent } from './sections/booking-cta/booking-cta.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopNavigationComponent,
    HeroComponent,
    AboutComponent,
    SignatureServicesComponent,
    SpaExperienceComponent,
    PricingComponent,
    TestimonialsComponent,
    BookingCtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
