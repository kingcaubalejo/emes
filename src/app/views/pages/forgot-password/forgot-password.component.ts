import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from '@coreui/angular';
import { cilWarning } from '@coreui/icons';


import { Login } from '../../../../model/login';
interface Log {
  username: string;
  password: string;
}

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
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
export class ForgotPassword {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]]
    })
  }

  onForgotPassword(): void {
    console.trace(this.forgotPasswordForm.value);
  }
  
}
