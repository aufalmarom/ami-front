import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { StarTriangleComponent } from './star-triangle/star-triangle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultQuestionComponent } from './result-question/result-question.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'star-triangle', component: StarTriangleComponent },
  { path: 'dynamic-question', component: DynamicQuestionComponent },
  { path: 'result-question', component: ResultQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
