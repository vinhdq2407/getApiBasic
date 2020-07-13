import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

const MaterialComponents = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports : [
    MaterialComponents
  ]
})
export class MaterialModule { }
