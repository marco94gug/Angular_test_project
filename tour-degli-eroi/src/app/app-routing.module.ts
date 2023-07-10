import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EroiComponent } from './eroi/eroi.component';

const routes: Routes = [{ path: 'heroes', component: EroiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
