import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ListPastorComponent } from './list-pastor/list-pastor.component';


@Component({
    selector: 'app-pastors',
    templateUrl: './pastors.component.html',
    imports: [RouterModule, ListPastorComponent]
})
export class PastorsComponent {

}
