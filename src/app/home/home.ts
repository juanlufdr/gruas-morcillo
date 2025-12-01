import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MetaService } from '../services/meta';
import { Card } from '../components/card/card';
import {
  buildCanonicalUrl,
  DEFAULT_KEYWORDS,
  LOCAL_BUSINESS_SCHEMA,
  OG_IMAGE_URL,
  SITE_METADATA,
} from '../services/seo.constants';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly metaService = inject(MetaService);
  services: any[] = [];

  ngOnInit(): void {
    this.metaService.updateSeo({
      title: `${SITE_METADATA.name} | Transporte de vehículos en Extremadura`,
      description: SITE_METADATA.description,
      keywords: DEFAULT_KEYWORDS,
      url: buildCanonicalUrl(),
      image: OG_IMAGE_URL,
      structuredData: LOCAL_BUSINESS_SCHEMA,
    });
    this.http.get('/assets/jsons/services.json').subscribe((data) => {
      this.services = data as any[];
    });
  }

  goToPhone() {
    window.location.href = 'tel:+34637143694';
  }

  goToWhatsApp() {
    window.open('https://wa.me/+34637143694', '_blank');
  }

}
