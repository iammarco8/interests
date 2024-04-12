import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'about', component:AboutPageComponent},
  {path: 'contacts', component:ContactsPageComponent},
  {path: 'services', component:ServicesPageComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
