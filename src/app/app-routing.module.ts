import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { StarTriangleComponent } from './star-triangle/star-triangle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'star-triangle', component: StarTriangleComponent },
  { path: 'dynamic-question', component: DynamicQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
