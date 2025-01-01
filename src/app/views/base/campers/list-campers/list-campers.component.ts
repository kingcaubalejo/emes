import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalFooterComponent, ModalHeaderComponent, ModalComponent, ModalBodyComponent, InputGroupComponent, OffcanvasBodyComponent, OffcanvasHeaderComponent, OffcanvasComponent, OffcanvasToggleDirective, FormCheckComponent, ContainerComponent, ProgressComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective, TableDirective, AvatarComponent } from '@coreui/angular';

import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';
import { RouterLink, RouterModule } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

import { ButtonDirective } from '@coreui/angular';


interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  church: string;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
    selector: 'app-list-campers',
    templateUrl: './list-campers.component.html',
    styleUrl: './list-campers.component.scss',
    imports: [ModalFooterComponent, ModalHeaderComponent, ModalComponent, ModalBodyComponent, InputGroupComponent, OffcanvasBodyComponent, OffcanvasHeaderComponent, OffcanvasComponent, OffcanvasToggleDirective, ButtonDirective, RouterModule, FormCheckComponent, MatSidenav, MatSidenavModule, ContainerComponent, RouterLink, PageItemDirective, PageLinkDirective, PaginationComponent, MatPaginatorModule, MatButtonToggleModule, MatButtonModule, ProgressComponent, IconDirective, ChartjsComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective, TableDirective, AvatarComponent]
})
export class ListCampersComponent {

  
  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Ph',
      church: "Capstone Believers Worldwide Mission",
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/images/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Ph',
      church: "Capstone Believers Worldwide Mission",
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/images/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Ph',
      church: "Capstone Believers Worldwide Mission",
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/images/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Ph',
      church: "Capstone Believers Worldwide Mission",
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/images/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Ph',
      church: "Capstone Believers Worldwide Mission",
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/images/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Ph',
      church: "Capstone Believers Worldwide Mission",
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/images/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];

  items = [1, 2, 3, 4];

  constructor(
    private sanitizer: DomSanitizer
  ) { }

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

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}
