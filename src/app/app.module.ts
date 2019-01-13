import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill'
import { MatToolbarModule , MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'align': [] }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }]
        ]
      }
    }),
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
