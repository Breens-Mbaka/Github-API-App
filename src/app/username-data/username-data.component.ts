import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-data',
  templateUrl: './username-data.component.html',
  styleUrls: ['./username-data.component.css']
})
export class UsernameDataComponent implements OnInit {
  @Input() userProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
