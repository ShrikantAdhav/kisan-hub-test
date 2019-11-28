import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materialModulesList = [MatSelectModule, MatFormFieldModule, MatSnackBarModule, MatDatepickerModule, MatInputModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModulesList
  ],
  exports: [
    ...materialModulesList
  ]
})
export class MaterialModule { }
