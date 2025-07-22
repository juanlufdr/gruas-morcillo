import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly meta = inject(Meta);

  addMetaTag(name: string, content: string): void {
    this.meta.addTag({ name, content });
  }
}
