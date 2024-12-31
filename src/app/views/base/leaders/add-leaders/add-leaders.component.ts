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
  selector: 'app-add-leaders',
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
  templateUrl: './add-leaders.component.html',
  styleUrl: './add-leaders.component.scss'
})
export class AddLeadersComponent {

}
