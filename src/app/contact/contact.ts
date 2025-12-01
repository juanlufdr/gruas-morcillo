import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Email } from '../services/email';
import { MetaService } from '../services/meta';
import {
  buildCanonicalUrl,
  DEFAULT_KEYWORDS,
  OG_IMAGE_URL,
  SITE_METADATA,
} from '../services/seo.constants';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(Email);
  private readonly metaService = inject(MetaService);
  form!: FormGroup;
  isSubmitted = false;

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.metaService.updateSeo({
      title: `${SITE_METADATA.name} | Contacto y atención 24h`,
      description:
        'Contacta con Grúas Morcillo para solicitar presupuestos, asistencia urgente o información sobre transporte de vehículos en Extremadura.',
      keywords: [...DEFAULT_KEYWORDS, 'contacto grúas morcillo'],
      url: buildCanonicalUrl('contact'),
      image: OG_IMAGE_URL,
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
      privacyPolicyAccepted: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      this.emailService
        .sendEmail(
          this.form.value.name,
          this.form.value.email,
          this.form.value.message
        )
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully:', response);
            this.form.reset();
            this.isSubmitted = false;
          },
          error: (error) => {
            console.error('Error sending email:', error);
            // Handle error appropriately, e.g., show a notification to the user
          },
        });
      // Here you would typically handle the form submission, e.g., send it to a server
    } else {
      console.error('Form is invalid');
    }
  }
}
