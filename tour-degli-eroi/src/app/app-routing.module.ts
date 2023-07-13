import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EroiComponent } from './eroi/eroi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: EroiComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'details/:id', component: HeroDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
