import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta';
import {
  buildCanonicalUrl,
  DEFAULT_KEYWORDS,
  OG_IMAGE_URL,
  SITE_METADATA,
} from '../services/seo.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateSeo({
      title: `${SITE_METADATA.name} | ¿Quiénes somos?`,
      description:
        'Conoce la historia de Grúas Morcillo, nuestra experiencia desde 2010 y cómo ayudamos a conductores y aseguradoras en Extremadura.',
      keywords: [...DEFAULT_KEYWORDS, 'historia grúas morcillo'],
      url: buildCanonicalUrl('about-us'),
      image: OG_IMAGE_URL,
      type: 'article',
    });
  }
}
