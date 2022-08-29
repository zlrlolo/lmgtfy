import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {AnimationComponent} from "./animation/animation.component";

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
