import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fleet',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './fleet.html',
  styleUrl: './fleet.scss',
})
export class Fleet {
  images = [
    { src: 'assets/imgs/webp/1.webp', alt: 'Imagen 1' },
    { src: 'assets/imgs/webp/2.webp', alt: 'Imagen 2' },
    { src: 'assets/imgs/webp/3.webp', alt: 'Imagen 3' },
    { src: 'assets/imgs/webp/4.webp', alt: 'Imagen 4' },
    { src: 'assets/imgs/webp/5.webp', alt: 'Imagen 5' },
    { src: 'assets/imgs/webp/6.webp', alt: 'Imagen 6' },
    { src: 'assets/imgs/webp/7.webp', alt: 'Imagen 7' },
    { src: 'assets/imgs/webp/8.webp', alt: 'Imagen 8' },
    { src: 'assets/imgs/webp/9.webp', alt: 'Imagen 9' },
    { src: 'assets/imgs/webp/10.webp', alt: 'Imagen 10' },
    { src: 'assets/imgs/webp/11.webp', alt: 'Imagen 11' },
    { src: 'assets/imgs/webp/12.webp', alt: 'Imagen 12' },
    { src: 'assets/imgs/webp/13.webp', alt: 'Imagen 13' },
    { src: 'assets/imgs/webp/14.webp', alt: 'Imagen 14' },
    { src: 'assets/imgs/webp/15.webp', alt: 'Imagen 15' },
  ];

  currentIndex = 0;

  selectImage(index: number) {
    this.currentIndex = index;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
