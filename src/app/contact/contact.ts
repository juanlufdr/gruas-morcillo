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
  form!: FormGroup;
  isSubmitted = false;

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
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
