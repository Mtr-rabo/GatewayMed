import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutModifierLabComponent } from './ajout-modifier-lab/ajout-modifier-lab.component';
import { ListLaboComponent } from './list-labo/list-labo.component';

const routes: Routes = [
  {
    path:'list-lab',component:ListLaboComponent,
    data:{

    }
  },
  {
    path:'ajout-lab',component:AjoutModifierLabComponent,
    data:{

    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
