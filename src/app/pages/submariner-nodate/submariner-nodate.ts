import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-submariner-nodate',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './submariner-nodate.html',
  styleUrls: ['./submariner-nodate.css']
})
export class SubmarinerNodateComponent {}