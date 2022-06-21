import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ParamsRoutingModule } from './params-routing.module';
import { ListLaboComponent } from './list-labo/list-labo.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AjoutModifierLabComponent } from './ajout-modifier-lab/ajout-modifier-lab.component';

@NgModule({
  declarations: [
    ListLaboComponent,
    AjoutModifierLabComponent
  ],
  imports: [
    CommonModule,
    ParamsRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule

  ],

})
export class ParamsModule { }
