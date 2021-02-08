import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ID, SECRET } from '../environments/environment'
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) {}

  // get profile data
  public getUsername(searchQuery:any):Observable<any> {
    let apiUrl = `https://api.github.com/users/${searchQuery}?client_id=${ID}&client_secret=${SECRET}`;
    return this.http.get<any>(apiUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  //get the projects of the user
  public getUserProjects(searchQuery:any):Observable<any[]>{
    let apiUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${ID}&client_secret=${SECRET}`;
    return this.http.get<any[]>(apiUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public getRepos(searchQuery2:any):Observable<any>{
    let apiUrl = `https://api.github.com/search/repositories?q=${searchQuery2}`;
    return this.http.get<any>(apiUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  //Handle client and server erros
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
