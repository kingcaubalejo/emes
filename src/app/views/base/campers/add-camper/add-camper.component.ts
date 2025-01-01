import { Component } from '@angular/core';
import { 
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent, 
  CardHeaderComponent, 
  CardBodyComponent,
  FormCheckComponent,
  FormControlDirective,
  FormSelectDirective,
  ButtonDirective 
} from '@coreui/angular';

@Component({
  selector: 'app-add-camper',
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent, 
    CardHeaderComponent, 
    CardBodyComponent,
    FormCheckComponent,
    FormControlDirective,
    FormSelectDirective,
    ButtonDirective 
  ],
  templateUrl: './add-camper.component.html',
  styleUrl: './add-camper.component.scss'
})
export class AddCamperComponent {

}
