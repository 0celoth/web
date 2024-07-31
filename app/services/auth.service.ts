import { Injectable, Inject, inject } from '@angular/core';
import { User } from '../models/user.model';
import { SupabaseService } from './supabase.service';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _supabaseClient = inject(SupabaseService).supabaseClient;

  constructor(
  ) { 
    this._supabaseClient.auth.onAuthStateChange((session) => {
      console.log(session);
    });
  }

  //======== Autenticacion =================================

  session(){
    return this._supabaseClient.auth.getSession();
  }

  login (credentials: SignUpWithPasswordCredentials){
    return this._supabaseClient.auth.signInWithPassword(credentials)
  }

  signUp (credentials: SignUpWithPasswordCredentials){
    return this._supabaseClient.auth.signUp(credentials)
  }

  signOut(){
    return this._supabaseClient.auth.signOut();
  }
}
