import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection', { static: true })
  heroSection!: ElementRef<HTMLElement>;

  @ViewChild('heroVideo')
  heroVideo?: ElementRef<HTMLVideoElement>;

  private readonly desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

  isDesktop = this.desktopMediaQuery.matches;

  private gsapContext?: gsap.Context;
  private removeTouchListener?: () => void;

  ngAfterViewInit(): void {
    this.desktopMediaQuery.addEventListener('change', this.handleViewportChange);

    if (this.isDesktop) {
      requestAnimationFrame(() => {
        this.initGsapVideoScroll();
      });
    }
  }

  ngOnDestroy(): void {
    this.destroyGsapVideoScroll();

    this.desktopMediaQuery.removeEventListener(
      'change',
      this.handleViewportChange,
    );
  }

  private handleViewportChange = (event: MediaQueryListEvent): void => {
    this.isDesktop = event.matches;

    this.destroyGsapVideoScroll();

    if (this.isDesktop) {
      requestAnimationFrame(() => {
        this.initGsapVideoScroll();
      });
    }
  };

  private initGsapVideoScroll(): void {
    if (!this.heroVideo) {
      return;
    }

    this.destroyGsapVideoScroll();

    gsap.registerPlugin(ScrollTrigger);

    const section = this.heroSection.nativeElement;
    const video = this.heroVideo.nativeElement;

    video.pause();
    video.currentTime = 0;

    this.activateVideoForIOS(video);

    this.gsapContext = gsap.context(() => {
      const setupTimeline = () => {
        const duration = video.duration || 1;

        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            video,
            {
              currentTime: 0,
            },
            {
              currentTime: duration,
            },
          );

        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        setupTimeline();
      } else {
        video.addEventListener('loadedmetadata', setupTimeline, { once: true });
      }
    }, section);
  }

  private destroyGsapVideoScroll(): void {
    this.gsapContext?.revert();
    this.gsapContext = undefined;

    this.removeTouchListener?.();
    this.removeTouchListener = undefined;
  }

  private activateVideoForIOS(video: HTMLVideoElement): void {
    const onTouchStart = () => {
      video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => {
          video.pause();
        });

      document.documentElement.removeEventListener('touchstart', onTouchStart);
    };

    document.documentElement.addEventListener('touchstart', onTouchStart, {
      passive: true,
    });

    this.removeTouchListener = () => {
      document.documentElement.removeEventListener('touchstart', onTouchStart);
    };
  }
}