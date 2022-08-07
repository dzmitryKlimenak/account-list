import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountsState } from './accounts.state';
import { Account } from "../../../common/interface/account.interface";
import { ACCOUNTS_INIT_DATA } from "./accounts.constant";
import { Store } from "../store-class";
import { select$ } from "../select";


@Injectable({
  providedIn: 'root',
})
export class AccountsStore {
  private data$: Store<AccountsState>;
  accounts$: Observable<Array<Account>>;
  activeAccount$: Observable<Account>;

  get accounts(): Account[] {
    return this.data$.getValue().accounts;
  }

  set accounts(accounts: Account[]) {
    this.data$.next({ ...this.data$.getValue(), accounts });
  }

  get activeAccount(): Account {
    return this.data$.getValue().activeAccount;
  }

  set activeAccount(activeAccount: Account) {
    this.data$.next({ ...this.data$.getValue(), activeAccount });
  }

  addAccount(account: Account) {
    const accounts = [...this.data$.getValue().accounts, account];
    this.data$.next({ ...this.data$.getValue(), accounts });
  }

  deleteAccount(id: number) {
    if (this.data$.getValue().activeAccount?.id === id) {
      this.removeActiveAccount();
    }
    const accounts = this.data$.getValue().accounts.filter(item => item.id !== id);
    this.data$.next({ ...this.data$.getValue(), accounts });
  }

  removeActiveAccount() {
    const activeAccount = null;
    this.data$.next({ ...this.data$.getValue(), activeAccount });
  }

  clearAccountStore() {
    const accounts = [];
    this.data$.next({ ...this.data$.getValue(), accounts });
    this.removeActiveAccount();
  }

  updateAccountDetails(account: Account) {
    let accounts = this.data$.getValue().accounts.map((item) => {
      return item?.id === account?.id ? {...account} : item
    });
    const activeAccount = {...account};
    this.data$.next({...this.data$.getValue(), accounts});
    this.data$.next({...this.data$.getValue(), activeAccount})
  }

  constructor() {
    this.updateData();
  }

  updateData(data: AccountsState = ACCOUNTS_INIT_DATA) {
    this.data$ = new Store<AccountsState>(data);
    this.accounts$ = select$(this.data$, store => store.accounts);
    this.activeAccount$ = select$(this.data$, store => store.activeAccount);
  }
}
