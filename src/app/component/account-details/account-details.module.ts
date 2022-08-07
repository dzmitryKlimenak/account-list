import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountDetailsComponent} from "./account-details.component";

const routes: Routes = [
  {
    path: ':id',
    component: AccountDetailsComponent,
  },
];

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountDetailsModule { }
