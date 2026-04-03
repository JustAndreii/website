import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [RouterModule,NavbarComponent, FooterComponent],
  templateUrl: './explorer.html',
  styleUrls: ['./explorer.css']
})
export class ExplorerComponent {

}