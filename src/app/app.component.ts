import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" fxLayoutGap="8px">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-icon-button routerLink="/home"
        ><mat-icon svgIcon="lemon"></mat-icon> <span class="mat-h2">LemonMart</span></a
      >
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        matTooltip="Profile"
        aria-label="User Profile"
        routerLink="/user/profile"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        mat-mini-fab
        matTooltip="Logout"
        aria-label="Logout"
        routerLink="/user/logout"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    )
  }
  title = 'lemon-mart'
}
