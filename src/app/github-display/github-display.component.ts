import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { NgxSpinnerModule } from 'ngx-spinner'
@Component({
  selector: 'app-github-display',
  templateUrl: './github-display.component.html',
  styleUrls: ['./github-display.component.css']
})
export class GithubDisplayComponent implements OnInit {

  public userQuery!:string;
  public userProfile:any;
  public userProjects!:any[];
  public errorMessage!:string;

  public searchUser() {
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
  

  constructor(private searchService: SearchServiceService,
    private loading:NgxSpinnerModule) {}

  ngOnInit(): void {
  }

}
