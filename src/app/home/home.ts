import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../components/card/card';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private http = inject(HttpClient);
  services: any[] = [];

  ngOnInit(): void {
    this.http.get('/assets/jsons/services.json').subscribe((data) => {
      console.log(data);
      this.services = data as any[];
    });
  }

  goToPhone() {
    window.location.href = 'tel:+34627313749';
  }

  goToWhatsApp() {
    window.open('https://wa.me/+34627313749', '_blank');
  }
}
