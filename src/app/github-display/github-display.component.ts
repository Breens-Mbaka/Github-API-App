import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-github-display',
  templateUrl: './github-display.component.html',
  styleUrls: ['./github-display.component.css']
})
export class GithubDisplayComponent implements OnInit {

  public userQuery!:string;
  public userQuery2!:string;
  public userProfile:any;
  public repositories:any;
  public userProjects!:any[];
  public errorMessage!:string;

  public searchUser() {
    //get and display username
    this.searchService.getUsername(this.userQuery)
    .subscribe(
      (data)=>{
        this.userProfile = data;
      },
      (error)=>{
        this.errorMessage = error;
      });

    this.searchService.getUserProjects(this.userQuery)
    .subscribe(
      (data)=>{
        this.userProjects = data;
      },
      (error)=>{
        this.errorMessage = error;
      });
  }
  //Saerch for only repos
  public searchRepos(){
    this.searchService.getRepos(this.userQuery2)
    .subscribe(
      (data)=>{
        this.repositories = data;
      },
      (error)=>{
        this.errorMessage = error;
      });
  }

  

  constructor(private searchService: SearchServiceService) {}

  ngOnInit(): void {
  }

}
