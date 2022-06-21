import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IContentList } from 'src/app/shared/model/contents.model';
import { ILaboratoire } from 'src/app/shared/model/laboratiore.model';
import { LaboratoireService } from 'src/app/shared/services/laboratoire.service';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator'
@Component({
  selector: 'app-list-labo',
  templateUrl: './list-labo.component.html',
  styleUrls: ['./list-labo.component.scss']
})
export class ListLaboComponent implements OnInit {
 listLabo:IContentList ={}
   // global search params
   searchParams: any = {
    libelle_recherche: "",
    filtre: []
  }

  constructor(public laboratoireService:LaboratoireService) { }

  ngOnInit(): void {
    this.laboratoireService.query().subscribe((res:HttpResponse<IContentList>)=> this.listLabo = res.body || {}
     );
  }
  getPage(e:any) {
    this.listLabo.size = e.pageSize
    this.listLabo.number = e.pageIndex
  console.error('ffff');
  }
  modifier(lab:ILaboratoire):void{
    alert('TODO: Modification de :'+lab)
  }
  supprimer(lab:ILaboratoire):void{
    alert('TODO: Modification de :'+lab)
  }

}
