import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {
  isPlatformBrowser,
  CommonModule
} from '@angular/common';

import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const slider = document.getElementById('slider');

      let index = 0;
      let direction = 1;

      setInterval(() => {
        index += direction;

        if (index === 3 || index === 0) {
          direction *= -1;
        }

        if (slider) {
          slider.style.transform = `translateX(-${index * 100}%)`;
        }
      }, 3000);
    }
  }
}