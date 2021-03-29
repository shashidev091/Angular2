import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TestComponent} from './testapp/testapp.component';
import {TestAppService} from './testapp/test-app.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './testapp/summary.pipe';
import {TitleHighlighterPipe} from './testapp/titleHighlighter.pipe';
import {ReuseableComponent} from './reuseable/reuseable.component';
import {PanelComponent} from './panel/panel.component';
import {LoginComponent} from './login/login.component';
import {InputFormatDirective} from './input-format.directive';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {NewCourseComponent} from './new-course/new-course.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';

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
    ContactFormComponent,
    ReactiveFormsComponent,
    NewCourseComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
