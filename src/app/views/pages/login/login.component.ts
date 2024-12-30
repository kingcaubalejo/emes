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
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
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
export class LoginComponent {

  loginForm: FormGroup;
  visible: boolean;
  dismissible: boolean;
  icons = { cilWarning };

  constructor(private fb: FormBuilder) {
    const login = new Login("username_01", "password_01");
    this.visible = false;
    this.dismissible = false;
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(6)]]
    })
  }

  authenticate(): void {
  
    this.visible = !this.loginForm.valid;

    if(!this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.trace(username, password); 
    }

  }
  
}
