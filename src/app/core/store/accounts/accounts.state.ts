import { Account } from "../../../common/interface/account.interface";

export type AccountsState = {
  accounts: Account[];
  activeAccount: Account;
};
