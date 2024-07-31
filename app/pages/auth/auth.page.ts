import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {Router, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  private _authService = inject(AuthService)
  private _router = inject(Router)

  ngOnInit() {}
  
  // Validador personalizado para comparar los correos electrónicos
  emailMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
   const email = control.get('email')?.value;
   const confirmarEmail = control.get('confirmaremail')?.value;

   if (email !== confirmarEmail) {
     return { emailMismatch: true };
   } else {
     return null;
   }
 };

    // Validador personalizado para comparar las contraseñas
    passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
     const password = control.get('password')?.value;
     const confirmarPassword = control.get('confirmarpassword')?.value;
 
     if (password !== confirmarPassword) {
       return { passwordMismatch: true };
     } else {
       return null;
     }
   };
 
 form = new FormGroup({

   email: new FormControl('', [Validators.required, Validators.email]),
   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
   });
   

 
   

 async login() {

   if (this.form.invalid) return;

   try {
     const {error,data} = await this._authService.login({
       email: this.form.value.email ?? '',
       password: this.form.value.password ?? ''
  
     });
     this._router.navigate(['home']);
     
    if(error) throw error;
    console.log(data);

   } catch (error) {
    console.log(error);

   }
 }


}
