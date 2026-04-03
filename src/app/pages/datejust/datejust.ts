import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-datejust',
  standalone: true,
  imports: [RouterModule,NavbarComponent, FooterComponent],
  templateUrl: './datejust.html',
  styleUrls: ['./datejust.css']
})
export class DatejustComponent {

}