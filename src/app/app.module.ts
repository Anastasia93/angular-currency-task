import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})

export class AppModule { }