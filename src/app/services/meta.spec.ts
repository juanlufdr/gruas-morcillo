import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';

import { MetaService } from './meta';

describe('MetaService', () => {
  let service: MetaService;
  let documentRef: Document;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaService],
    });
    service = TestBed.inject(MetaService);
    documentRef = TestBed.inject(DOCUMENT);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
  });

  it('should update title, tags and canonical url', () => {
    const seoData = {
      title: 'Test title',
      description: 'Test description',
      keywords: ['uno', 'dos'],
      url: 'https://example.com/page',
      image: 'https://example.com/og-image.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Example',
      },
    };

    service.updateSeo(seoData);

    expect(title.getTitle()).toBe(seoData.title);
    const descriptionTag = meta.getTag('name="description"');
    expect(descriptionTag?.content).toBe(seoData.description);
    const canonical = documentRef.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    expect(canonical?.getAttribute('href')).toBe(seoData.url);
    const structuredData = documentRef.getElementById('structured-data');
    expect(structuredData?.textContent).toContain('WebSite');
  });
});
