import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  options_auth: RequestOptions;
  headers_auth: Headers;
  options_ques: RequestOptions;
  headers_ques: Headers;

  constructor(private _http: Http) {
    this.headers_auth = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.headers_ques = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': true
    });
    this.options_auth = new RequestOptions({ headers: this.headers_auth });
    this.options_ques = new RequestOptions({ headers: this.headers_ques });
  }



  //Get auth_token
  postData(url: string, param: any): Observable<any> {
    return this._http
      .post(url, param, this.options_auth)
      .map(this.extractData)
      .catch(this.handleError)
  }

  //Get questions
  getData(url: string): Observable<any> {
    return this._http
      .get(url, this.options_ques)
      .map(this.extractData)
      .catch(this.handleError);

  }
  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

}
