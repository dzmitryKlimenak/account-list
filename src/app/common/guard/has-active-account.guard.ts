import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountsStore} from "../../core/store/accounts/accounts.store";
import {RouterPath} from "../constant/app-router-path.constant";

@Injectable({
  providedIn: 'root'
})
export class HasActiveAccountGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const hasAccount = this.accountStore.accounts.find(account => account.id !== route.params.id);
    if (hasAccount) {
      return true
    }
    return  this.router.navigate([RouterPath.home]);
  }

  constructor(private accountStore: AccountsStore, private router: Router) {
  }

}
