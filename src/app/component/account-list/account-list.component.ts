import { Component } from '@angular/core';
import { AccountsStore } from "../../core/store/accounts/accounts.store";
import { filter, map} from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { AccountDialogComponent } from "../account-dialog/account-dialog.component";
import { Router } from "@angular/router";
import { Account } from "../../common/interface/account.interface";
import { RouterPath } from "../../common/constant/app-router-path.constant";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent {
  accounts$ = this.accountStore.accounts$;
  hasAccounts$ = this.accounts$.pipe(map(items => items.length));
  isAccountListEmpty$ = this.hasAccounts$.pipe(map(hasAccounts => !hasAccounts));

  constructor(private accountStore: AccountsStore, private dialog: MatDialog, private router: Router) {}

  addNewUser() {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      panelClass: ['w-1/3'],
      disableClose: true
    });

    dialogRef
      .afterClosed()
      .pipe(filter(account => !!account))
      .subscribe((account) => {
        const userId = Date.now();
        this.accountStore.addAccount({...account, id: userId});
      });
  }

  clearUserList() {
    this.accountStore.clearAccountStore();
    this.router.navigate([RouterPath.home]);
  }

  deleteAccount(id: number) {
    this.accountStore.deleteAccount(id);
    this.router.navigate([RouterPath.home]);
  }

  setActiveAccount(account: Account) {
    this.accountStore.activeAccount = account;
    this.router.navigate([RouterPath.account, account.id])
  }
}
