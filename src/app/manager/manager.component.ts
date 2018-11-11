import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/manager/home" routerLinkActive="active-link"
        >Manager's Dashboard</a
      >
      <a mat-button routerLink="/manager/users" routerLinkActive="active-link"
        >User Management</a
      >
      <a mat-button routerLink="/manager/receipts" routerLinkActive="active-link"
        >Receipt Lookup</a
      >
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        matTooltip="Inventory"
        aria-label="Inventory"
        routerLink="/inventory"
      >
        <mat-icon>list</mat-icon>
      </button>
      <button mat-mini-fab matTooltip="POS" aria-label="POS" routerLink="/pos">
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ],
})
export class ManagerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
