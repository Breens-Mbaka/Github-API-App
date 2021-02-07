import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  @Input() userProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
