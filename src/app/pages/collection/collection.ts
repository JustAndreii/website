import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './collection.html',
  styleUrls: ['./collection.css']
})
export class CollectionComponent {

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