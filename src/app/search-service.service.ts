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
  public getUsername(searchQuery) {
    let apiUrl = `https://api.github.com/users/${searchQuery}client_id=${ID}&client_secret=${SECRET}`;
    return this.http.get(apiUrl).pipe(
      retry(1),
    );
  }


 
}
