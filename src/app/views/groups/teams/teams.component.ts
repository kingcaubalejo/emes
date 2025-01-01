import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective]
})
export class TeamsComponent {

  teams: Array<{group: number, group_name: string}> = [];

  constructor(
    private sanitizer: DomSanitizer
  ) { 
    this.teams = [
      {
        group: 1, group_name: 'GroupA'
      },{
        group: 2, group_name: 'GroupB'
      },{
        group: 3, group_name: 'GroupC'
      },{
        group: 4, group_name: 'GroupD'
      },{
        group: 5, group_name: 'GroupD'
      },{
        group: 6, group_name: 'GroupE'
      },{
        group: 7, group_name: 'GroupF'
      },{
        group: 8, group_name: 'GroupG'
      },{
        group: 9, group_name: 'GroupH'
      },{
        group: 10, group_name: 'GroupI'
      },{
        group: 11, group_name: 'GroupJ'
      },{
        group: 12, group_name: 'GroupK'
      },{
        group: 13, group_name: 'GroupL'
      }
    ]

    console.log(typeof this.teams)
  }

  getAccordionBodyText(value: string|number) {
    const textSample = `
      <strong>This is the <mark>#${value}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }
}
