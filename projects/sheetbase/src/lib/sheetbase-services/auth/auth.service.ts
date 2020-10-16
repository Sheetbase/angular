import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { User, AuthProvider } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Sheetbase: SheetbaseService) {}

  onAuthStateChanged() {
    return new Observable<User>(observer => this.Sheetbase.auth().onAuthStateChanged(user => observer.next(user)));
  }

  checkActionCode(code: string) {
    return from(this.Sheetbase.auth().checkActionCode(code));
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return from(this.Sheetbase.auth().createUserWithEmailAndPassword(email, password));
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(this.Sheetbase.auth().signInWithEmailAndPassword(email, password));
  }

  signInWithCustomToken(token: string) {
    return from(this.Sheetbase.auth().signInWithCustomToken(token));
  }

  signInAnonymously() {
    return from(this.Sheetbase.auth().signInAnonymously());
  }

  signInWithPopup(provider: AuthProvider) {
    return from(this.Sheetbase.auth().signInWithPopup(provider));
  }

  sendPasswordResetEmail(email: string) {
    return from(this.Sheetbase.auth().sendPasswordResetEmail(email));
  }

  verifyPasswordResetCode(code: string) {
    return from(this.Sheetbase.auth().verifyPasswordResetCode(code));
  }

  confirmPasswordReset(code: string, newPassword: string) {
    return from(this.Sheetbase.auth().confirmPasswordReset(code, newPassword));
  }

  signOut() {
    return from(this.Sheetbase.auth().signOut());
  }

  googleAuthProvider() {
    return this.Sheetbase.auth().googleAuthProvider();
  }

  facebookAuthProvider() {
    return this.Sheetbase.auth().facebookAuthProvider();
  }

}
