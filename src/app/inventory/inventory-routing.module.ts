import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CategoriesComponent } from './categories/categories.component'
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'
import { InventoryComponent } from './inventory.component'
import { ProductsComponent } from './products/products.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: InventoryHomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'stockentry', component: StockEntryComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
