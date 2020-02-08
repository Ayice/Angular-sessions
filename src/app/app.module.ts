import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ButtonComponent, NavComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
