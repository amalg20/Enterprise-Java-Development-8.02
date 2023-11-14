import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path:"",                             /* ---------> home Page */
    component: HomeComponent,
  },
  {
    path:"contact",                     /* ---------> contact Page */
    component: ContactComponent,
  },
  {
    path: "**",                        /* ----------> 404 Page */
    component: ErrorComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
