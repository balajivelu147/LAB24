import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatBadgeModule} from '@angular/material/badge'

const material=[MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatBadgeModule]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { 
}
