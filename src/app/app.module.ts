import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathBookComponent } from './math-book/math-book.component';
import { EquationPanelComponent } from './equation-panel/equation-panel.component';
import { EquationComponent } from './equation/equation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnglishBookComponent } from './english-book/english-book.component';

@NgModule({
  declarations: [
    AppComponent,
    MathBookComponent,
    EquationPanelComponent,
    EquationComponent,
    EnglishBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
