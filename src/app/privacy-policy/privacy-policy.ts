import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../services/meta';
import {
  buildCanonicalUrl,
  OG_IMAGE_URL,
  SITE_METADATA,
} from '../services/seo.constants';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateSeo({
      title: `${SITE_METADATA.name} | Política de privacidad`,
      description:
        'Información sobre el tratamiento de datos personales, finalidades y derechos de los usuarios de Grúas Morcillo.',
      keywords: ['política de privacidad grúas morcillo', 'protección de datos'],
      url: buildCanonicalUrl('privacy-policy'),
      image: OG_IMAGE_URL,
      type: 'article',
      robots: 'index,follow',
    });
  }
}
