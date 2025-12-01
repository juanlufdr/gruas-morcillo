import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../services/meta';
import {
  buildCanonicalUrl,
  OG_IMAGE_URL,
  SITE_METADATA,
} from '../services/seo.constants';

@Component({
  selector: 'app-cookie-policy',
  imports: [],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.scss',
})
export class CookiePolicy implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateSeo({
      title: `${SITE_METADATA.name} | Política de cookies`,
      description:
        'Conoce cómo utiliza Grúas Morcillo las cookies para mejorar la experiencia de navegación y cómo gestionarlas.',
      keywords: [
        'política de cookies grúas morcillo',
        'cookies transporte vehículos',
      ],
      url: buildCanonicalUrl('cookie-policy'),
      image: OG_IMAGE_URL,
      type: 'article',
      robots: 'index,follow',
    });
  }
}
