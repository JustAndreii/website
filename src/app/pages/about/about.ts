import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {

  @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach((el: any) => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        el.classList.add('show');
      }
    });
  }
}