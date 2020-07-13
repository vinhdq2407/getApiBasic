import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdComponent } from './id/id.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'id', component: IdComponent },
  { path: 'dash', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
