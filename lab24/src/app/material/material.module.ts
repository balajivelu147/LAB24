import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatBadgeModule} from '@angular/material/badge'
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete'


const material=[MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatBadgeModule,
  MatInputModule,
 
  MatAutocompleteModule]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { 
}
