import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import {BookStoreService} from "./book-store.service";

@Injectable()
export class AuthCheckGuard implements CanActivate {
  constructor(private router: Router,
              private bookStoreService: BookStoreService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.bookStoreService.getCheckoutFlag() === true) {
      return true;
    }
    this.router.navigate(['/book-store']);
    return false;
  }
}
