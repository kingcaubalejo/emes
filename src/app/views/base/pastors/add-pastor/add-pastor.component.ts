import { Component } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormCheckComponent, FormControlDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';


@Component({
    selector: 'add-pastors',
    templateUrl: './add-pastor.component.html',
    styleUrls: ['./add-pastor.component.scss'],
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
        ButtonDirective,
    ]
})
export class AddPastorComponent {

}