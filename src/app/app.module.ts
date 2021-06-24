import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarTriangleComponent } from './star-triangle/star-triangle.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';

@NgModule({
  declarations: [
    AppComponent,
    StarTriangleComponent,
    DynamicQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
