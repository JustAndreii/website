import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explorer-2',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './explorer-2.html',
  styleUrls: ['./explorer-2.css']
})
export class Explorer2Component {}