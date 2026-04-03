import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { AboutComponent } from './pages/about/about';
import { CollectionComponent } from './pages/collection/collection';

import { SubmarinerComponent } from './pages/submariner/submariner';
import { DatejustComponent } from './pages/datejust/datejust';
import { GmtComponent } from './pages/gmt/gmt';
import { ExplorerComponent } from './pages/explorer/explorer';

import { SubmarinerDateComponent } from './pages/submariner-date/submariner-date';
import { SubmarinerNodateComponent } from './pages/submariner-nodate/submariner-nodate';
import { Datejust36Component } from './pages/datejust-36/datejust-36';
import { Datejust41Component } from './pages/datejust-41/datejust-41';
import { GmtBatmanComponent } from './pages/gmt-batman/gmt-batman';
import { GmtPepsiComponent } from './pages/gmt-pepsi/gmt-pepsi';
import { Explorer36Component } from './pages/explorer-36/explorer-36';
import { Explorer2Component } from './pages/explorer-2/explorer-2';

import { PriceEstimatorComponent } from './pages/price-estimator/price-estimator';
import { ContactComponent } from './pages/contact/contact';
import { FaqComponent } from './pages/faq/faq';
import { GalleryComponent } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
{ path: 'collection', component: CollectionComponent },


  { path: 'submariner', component: SubmarinerComponent },
  { path: 'datejust', component: DatejustComponent },
  { path: 'gmt', component: GmtComponent },
  { path: 'explorer', component: ExplorerComponent },

  { path: 'submariner-date', component: SubmarinerDateComponent },
  { path: 'submariner-nodate', component: SubmarinerNodateComponent },

  { path: 'datejust-36', component: Datejust36Component },
  { path: 'datejust-41', component: Datejust41Component },

  { path: 'gmt-batman', component: GmtBatmanComponent },
  { path: 'gmt-pepsi', component: GmtPepsiComponent },

  { path: 'explorer-36', component: Explorer36Component },
  { path: 'explorer-2', component: Explorer2Component },

  { path: 'price', component: PriceEstimatorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'gallery', component: GalleryComponent },
];