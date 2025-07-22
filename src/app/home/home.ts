import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../components/card/card';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MetaService } from '../services/meta';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private http = inject(HttpClient);
  private metService = inject(MetaService);
  services: any[] = [];

  ngOnInit(): void {
    this.setSeo();
    this.http.get('/assets/jsons/services.json').subscribe((data) => {
      console.log(data);
      this.services = data as any[];
    });
  }

  goToPhone() {
    window.location.href = 'tel:+34627313749';
  }

  goToWhatsApp() {
    window.open('https://wa.me/+34627313749', '_blank');
  }

  private setSeo() {
    this.metService.addMetaTag(
      'title',
      'Gruas Morcillo - Transporte de vehículos'
    );
    this.metService.addMetaTag(
      'description',
      'Servicios de grúas y transporte de vehículos en Don Benito, Badajoz y Extremadura.'
    );
    this.metService.addMetaTag(
      'keywords',
      'grúas, transporte de vehículos, Don Benito, Badajoz, Extremadura'
    );
    this.metService.addMetaTag('robots', 'index, follow');
    this.metService.addMetaTag(
      'og:title',
      'Gruas Morcillo - Transporte de vehículos'
    );
    this.metService.addMetaTag(
      'og:description',
      'Servicios de grúas y transporte de vehículos en Don Benito, Badajoz y Extremadura.'
    );
    this.metService.addMetaTag(
      'og:image',
      'https://gruasmorcillo.com/assets/images/logo.png'
    );
    this.metService.addMetaTag('og:url', 'https://gruasmorcillo.com');
    this.metService.addMetaTag('og:type', 'website');
  }
}
