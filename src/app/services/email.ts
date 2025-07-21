import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Email {
  private readonly httpClient = inject(HttpClient);
  // private readonly apiUrl = 'https://formsubmit.co/juanluisfragoso@gmail.com';
  private readonly apiUrl = 'https://formspree.io/f/mldlgqyy';

  sendEmail(name: string, email: string, message: string) {
    const emailBody = this.buildEmailBody(name, email, message);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.httpClient.post(this.apiUrl, emailBody, {
      headers,
      responseType: 'text',
    });
  }

  private buildEmailBody(name: string, email: string, message: string): any {
    const formData = new URLSearchParams();
    formData.set('nombre', name);
    formData.set('email', email);
    formData.set('mensaje', message);
    formData.set('_subject', 'Nuevo mensaje desde la web');

    return formData;
  }
}
