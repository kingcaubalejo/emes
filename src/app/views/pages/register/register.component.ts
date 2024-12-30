import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from '@coreui/angular';
import { cilWarning } from '@coreui/icons';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports: [
      ContainerComponent,
      RowComponent, 
      ColComponent,
      CardGroupComponent,
      TextColorDirective,
      CardComponent,
      CardBodyComponent,
      InputGroupComponent,
      InputGroupTextDirective, 
      IconDirective,
      FormControlDirective,
      ButtonDirective,
      NgStyle,
      ReactiveFormsModule,
      RouterModule,
      AlertComponent,
    ]
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    })
  }

  onRegister(): void {
    console.trace(this.registrationForm.value);
  }

}
