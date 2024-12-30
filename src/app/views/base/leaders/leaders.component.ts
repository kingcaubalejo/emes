import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    templateUrl: './leaders.component.html',
    styleUrls: ['./leaders.component.scss'],
    imports: [
      RouterModule
    ]
})
export class LeadersComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }
}
