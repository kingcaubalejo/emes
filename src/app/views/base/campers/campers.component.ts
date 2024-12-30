import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RouterLink, RouterModule } from '@angular/router';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent
} from '@coreui/angular';

type CardColor = {
  color: string
  textColor?: string
}

@Component({
    selector: 'app-campers',
    templateUrl: './campers.component.html',
    styleUrls: ['./campers.component.scss'],
  imports: [RouterModule, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, NgTemplateOutlet, CardTitleDirective, CardTextDirective, ButtonDirective, CardSubtitleDirective, CardLinkDirective, RouterLink, ListGroupDirective, ListGroupItemDirective, CardFooterComponent, BorderDirective, CardGroupComponent, GutterDirective, CardImgDirective, TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
})
export class CampersComponent {

  colors: CardColor[] = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  tabs = ['Active', 'List', 'Disabled']

}
