import { Component } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";
import { AccountsStore } from "../../core/store/accounts/accounts.store";
import { Account } from "../../common/interface/account.interface";
import { MatDialog } from "@angular/material/dialog";
import { AccountDialogComponent } from "../account-dialog/account-dialog.component";
import { RouterPath } from "../../common/constant/app-router-path.constant";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  host: {
    class: 'flex flex-col justify-center items-center'
  }
})
export class AccountDetailsComponent {
  activeAccount$ = this.accountStore.activeAccount$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountStore: AccountsStore,
    private dialog: MatDialog
  ) { }

  hideAccountDetails() {
    this.accountStore.removeActiveAccount();
    this.router.navigate([RouterPath.home]);
  }

  editAccountDetails(account: Account) {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      panelClass: ['w-1/3'],
      disableClose: true,
      data: {...account, edit: true},
    });

    dialogRef
      .afterClosed()
      .subscribe((account) => {
        this.accountStore.updateAccountDetails(account)
      });
  }
}
