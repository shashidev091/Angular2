import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestComponent} from './testapp/testapp.component';
import {TestappService} from './testapp/testapp.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './testapp/summary.pipe';
import {TitleHighlighterPipe} from './testapp/titleHighlighter.pipe';
import { ReuseableComponent } from './reuseable/reuseable.component';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SummaryPipe,
    TitleHighlighterPipe,
    ReuseableComponent,
    PanelComponent,
    LoginComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TestappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
