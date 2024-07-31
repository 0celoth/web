import { Component, inject, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private _authService = inject(AuthService);
  private _router = inject(Router);

  async ngOnInit() { }



  async logout() {
   await this._authService.signOut()
   this._router.navigateByUrl('auth');

  }
}
