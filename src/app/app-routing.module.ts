import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountListComponent} from "./component/account-list/account-list.component";
import {HasActiveAccountGuard} from "./common/guard/has-active-account.guard";

const routes: Routes = [
  {
    path: '',
    component: AccountListComponent,
    children: [
      {
        path: 'account',
        canActivate: [HasActiveAccountGuard],
        loadChildren: () => import('./component/account-details/account-details.module').then(m => m.AccountDetailsModule),
      },
    ],
  },
  /*  if not route exist - navigate  */
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
