import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment, ID, SECRET } from '../environments/environment'
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) {}

  // get profile data
  public getUsername(searchQuery):Observable<any> {
    let apiUrl = `https://api.github.com/users/${searchQuery}?client_id=${ID}&client_secret=${SECRET}`;
    return this.http.get<any>(apiUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }


  public getUserProjects(searchQuery):Observable<any>{
    let apiUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${ID}&client_secret=${SECRET}`;
    return this.http.get<any>(apiUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }


  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      errorMessage = `Message: ${error.error.message}`
    }
    else {
      errorMessage = `Status: ${error.status} Message: ${error.message}`
    }
    return throwError(errorMessage)
  }
 
}
