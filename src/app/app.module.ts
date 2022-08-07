import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountListComponent } from './component/account-list/account-list.component';
import { AccountDialogComponent } from './component/account-dialog/account-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogModule} from "@angular/cdk/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { AccountDetailsComponent } from './component/account-details/account-details.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { FormFieldComponent } from './component/account-dialog/component/form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountDialogComponent,
    FormFieldComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DialogModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
