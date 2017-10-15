
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';




@Injectable()
export class ContactService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private mailUrl = 'http://localhost:3000/sendEmail';

  constructor(private http: Http) { }


  submit( formvalue ) : Promise <any> {
  console.log ( formvalue);
  return this.http
    .post(this.mailUrl, JSON.stringify(formvalue), {headers: this.headers})
    .toPromise()
    .then((res) =>  res.json().sent)
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
