import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-display',
  templateUrl: './github-display.component.html',
  styleUrls: ['./github-display.component.css']
})
export class GithubDisplayComponent implements OnInit {

  public userQuery!:string;

  public searchUser() {
    
  }

  constructor() {}

  ngOnInit(): void {
  }

}
