import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment'
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {}

  public getUser(searchQuery:any):Observable<any> {
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`
    return this.http.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public getProjects(searchQuery:any):Observable<any>{
    let dataUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`
    return this.http.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      errorMessage = `${error.error.message}`;
      alert("Error client side");
    }
    else{
      errorMessage = `${error.status} ${error.message}`;
      alert("Error server side");
    }
    return throwError(errorMessage);
  }
}
