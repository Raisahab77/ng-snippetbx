import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationTrackerComponent } from './application-tracker/application-tracker.component';

const routes: Routes = [{path:'application-status',component:ApplicationTrackerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
