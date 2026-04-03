import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-submariner-date',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './submariner-date.html',
  styleUrls: ['./submariner-date.css']
})
export class SubmarinerDateComponent {}