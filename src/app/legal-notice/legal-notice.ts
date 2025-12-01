import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta';
import {
  buildCanonicalUrl,
  OG_IMAGE_URL,
  SITE_METADATA,
} from '../services/seo.constants';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateSeo({
      title: `${SITE_METADATA.name} | Aviso legal`,
      description:
        'Consulta el aviso legal de Grúas Morcillo: datos fiscales, condiciones de uso de la web y obligaciones del usuario.',
      keywords: ['aviso legal grúas morcillo', 'términos legales Don Benito'],
      url: buildCanonicalUrl('legal-notice'),
      image: OG_IMAGE_URL,
      type: 'article',
      robots: 'index,follow',
    });
  }
}
