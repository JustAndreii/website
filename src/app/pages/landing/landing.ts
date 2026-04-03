import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule], // 🔥 REQUIRED
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {}