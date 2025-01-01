import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

@Component({
    selector: 'app-churches',
    templateUrl: './churches.component.html',
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, IconDirective, RouterLink]
})
export class ChurchesComponent {

  churches: Array<{row: number , content: Array<{church: number, church_name: string, church_members: number}> }> = [];

  constructor() {
    this.churches = [
      {
        row: 1,
        content: [
          { church: 1, church_name: 'Capstone Message Believers Church', church_members: 50 },
          { church: 2, church_name: 'Capstone Message Believers Church', church_members: 50 },
          { church: 3, church_name: 'Capstone Message Believers Church', church_members: 50 }, 
          { church: 4, church_name: 'Capstone Message Believers Church', church_members: 50 }
        ]
      },{
        row: 2,
        content: [
          { church: 5, church_name: 'Capstone Message Believers Church', church_members: 50 },
          { church: 6, church_name: 'Capstone Message Believers Church', church_members: 50 },
          { church: 7, church_name: 'Capstone Message Believers Church', church_members: 50 }, 
          { church: 8, church_name: 'Capstone Message Believers Church', church_members: 50 }
        ]
      },{
        row: 3,
        content: [
          { church: 9, church_name: 'Capstone Message Believers Church', church_members: 50 },
          { church: 10, church_name: 'Capstone Message Believers Church', church_members: 50 },
          { church: 11, church_name: 'Capstone Message Believers Church', church_members: 50 }, 
          { church: 12, church_name: 'Capstone Message Believers Church', church_members: 50 }
        ]
      },{
        row: 4,
        content: [
          { church: 13, church_name: 'Capstone Message Believers Church', church_members: 50 },
        ]
      }
    ];
  }

}
