import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type TagAttribute = 'name' | 'property';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  robots?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  structuredData?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  updateSeo(metadata: SeoMetadata): void {
    this.title.setTitle(metadata.title);
    this.upsertTag('name', 'description', metadata.description);
    this.upsertTag(
      'name',
      'keywords',
      metadata.keywords?.filter(Boolean).join(', '),
    );
    this.upsertTag('name', 'robots', metadata.robots ?? 'index,follow');

    const pageUrl = metadata.url ?? this.document.location?.href ?? '/';
    this.upsertTag('property', 'og:title', metadata.title);
    this.upsertTag('property', 'og:description', metadata.description);
    this.upsertTag('property', 'og:image', metadata.image);
    this.upsertTag('property', 'og:url', pageUrl);
    this.upsertTag('property', 'og:type', metadata.type ?? 'website');
    this.upsertTag('property', 'og:locale', metadata.locale ?? 'es_ES');
    this.upsertTag('name', 'twitter:card', 'summary_large_image');
    this.upsertTag('name', 'twitter:title', metadata.title);
    this.upsertTag('name', 'twitter:description', metadata.description);
    this.upsertTag('name', 'twitter:image', metadata.image);

    this.setCanonicalUrl(pageUrl);
    if (metadata.structuredData) {
      this.setStructuredData(metadata.structuredData);
    }
  }

  private upsertTag(
    selector: TagAttribute,
    name: string,
    content?: string,
  ): void {
    if (!content) {
      return;
    }

    this.meta.updateTag({ [selector]: name, content });
  }

  private setCanonicalUrl(url: string): void {
    if (!url) {
      return;
    }

    let link: HTMLLinkElement | null = this.document.head.querySelector(
      'link[rel="canonical"]',
    );

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setStructuredData(data: Record<string, unknown>): void {
    const scriptId = 'structured-data';
    let script = this.document.head.querySelector<HTMLScriptElement>(
      `script#${scriptId}`,
    );

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}
