import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AuthUser, AuthProvider } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sheetbaseService: SheetbaseService) {}

  onAuthStateChanged() {
    return new Observable<AuthUser>(observer => this.sheetbaseService.auth().onAuthStateChanged(user => observer.next(user)));
  }

  checkActionCode(code: string) {
    return from(this.sheetbaseService.auth().checkActionCode(code));
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return from(this.sheetbaseService.auth().createUserWithEmailAndPassword(email, password));
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(this.sheetbaseService.auth().signInWithEmailAndPassword(email, password));
  }

  signInWithCustomToken(token: string) {
    return from(this.sheetbaseService.auth().signInWithCustomToken(token));
  }

  signInAnonymously() {
    return from(this.sheetbaseService.auth().signInAnonymously());
  }

  signInWithPopup(provider: AuthProvider) {
    return from(this.sheetbaseService.auth().signInWithPopup(provider));
  }

  sendPasswordResetEmail(email: string) {
    return from(this.sheetbaseService.auth().sendPasswordResetEmail(email));
  }

  verifyPasswordResetCode(code: string) {
    return from(this.sheetbaseService.auth().verifyPasswordResetCode(code));
  }

  confirmPasswordReset(code: string, newPassword: string) {
    return from(this.sheetbaseService.auth().confirmPasswordReset(code, newPassword));
  }

  signOut() {
    return from(this.sheetbaseService.auth().signOut());
  }

  googleAuthProvider() {
    return this.sheetbaseService.auth().googleAuthProvider();
  }

  facebookAuthProvider() {
    return this.sheetbaseService.auth().facebookAuthProvider();
  }

}
