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
    { src: 'assets/imgs/1.jpeg', alt: 'Imagen 1' },
    { src: 'assets/imgs/3.jpeg', alt: 'Imagen 3' },
    { src: 'assets/imgs/4.jpeg', alt: 'Imagen 4' },
    { src: 'assets/imgs/5.jpeg', alt: 'Imagen 5' },
    { src: 'assets/imgs/6.jpeg', alt: 'Imagen 6' },
    { src: 'assets/imgs/7.jpeg', alt: 'Imagen 7' },
    { src: 'assets/imgs/8.jpeg', alt: 'Imagen 8' },
    { src: 'assets/imgs/9.jpeg', alt: 'Imagen 9' },
    { src: 'assets/imgs/10.jpeg', alt: 'Imagen 10' },
    { src: 'assets/imgs/11.jpeg', alt: 'Imagen 11' },
    { src: 'assets/imgs/12.jpeg', alt: 'Imagen 12' },
    { src: 'assets/imgs/13.jpeg', alt: 'Imagen 13' },
    { src: 'assets/imgs/14.jpeg', alt: 'Imagen 14' },
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
