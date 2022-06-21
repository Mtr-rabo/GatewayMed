import { Component, OnInit } from '@angular/core';
import { ILaboratoire } from 'src/app/shared/model/laboratiore.model';
import { FormBuilder, FormGroup } from '@angular/forms'
import { LaboratoireService } from 'src/app/shared/services/laboratoire.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout-modifier-lab',
  templateUrl: './ajout-modifier-lab.component.html',
  styleUrls: ['./ajout-modifier-lab.component.scss']
})
export class AjoutModifierLabComponent implements OnInit {
 lab:ILaboratoire = {};
  constructor(private labService:LaboratoireService,
     public  router: Router
  ) { }

  ngOnInit(): void {
  }
  save():void{
    this.labService.create(this.lab).subscribe((res:HttpResponse<ILaboratoire>)=>{
      if (res.body) {
        alert("enresgistrement avec success !!!");
        this.router.navigateByUrl('/params/list-lab')
      }else{
        alert("enresgistrement echoué !!!");
      }
    })

  }
  annuler():void{
    this.router.navigateByUrl('/params/list-lab')
  }
}
