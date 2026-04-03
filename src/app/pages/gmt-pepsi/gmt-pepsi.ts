import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gmt-pepsi',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gmt-pepsi.html',
  styleUrls: ['./gmt-pepsi.css']
})
export class GmtPepsiComponent {}