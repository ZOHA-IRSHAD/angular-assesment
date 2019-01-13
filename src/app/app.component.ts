import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Variables
  title = 'case-study';
  questions: any = [];
  // URL
  urlForAuth = 'https://simulationapi.ur-nl.com/oauth/token.json';
  body = new URLSearchParams();


  constructor(private _service: QuestionService) { }

  ngOnInit() {
    //data of url: Get Access Token
    this.body.set('grant_type', 'password');
    this.body.set('scope', 'user');
    this.body.set('client_id', '4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5');
    this.body.set('client_secret', '908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88');
    this.body.set('auth_token', 'azd4jXWWLagyb9KzgfDJ');

    //service for fetching auth_key and questions
    this._service.postData(this.urlForAuth, this.body.toString()).switchMap(authResponse =>
      this._service.getData('https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions&access_token=' + authResponse.access_token + '')
    ).subscribe(quesResponse => {
      this.questions = quesResponse.user_company_case_study.company_case_study.questions;
    })
  }
}
