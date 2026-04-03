import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-gmt',
  standalone: true,
  imports: [RouterModule,NavbarComponent, FooterComponent],
  templateUrl: './gmt.html',
  styleUrls: ['./gmt.css']
})
export class GmtComponent {

}