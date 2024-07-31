import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SupabaseService } from 'src/app/services/supabase.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  private _authService = inject(AuthService)
  
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
    

  
    

  async signUp() {

    if (this.form.invalid) return;

    const authResponse = await this._authService.signUp({
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? ''

    });
    console.log({authResponse})
  }

  ngOnInit() {
  }
}
