import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILaboratoire } from '../model/laboratiore.model';
import { IContentList } from '../model/contents.model';

const SERVER_API_URL="http://ec2-44-203-191-77.compute-1.amazonaws.com:8181/";
type EntityResponseType = HttpResponse<ILaboratoire>;
type EntityArrayResponseType = HttpResponse<ILaboratoire[]>;

@Injectable({ providedIn: 'root' })
export class LaboratoireService {

  public resourceUrl = SERVER_API_URL + 'parametrages?type=laboratoire';

  constructor(protected http: HttpClient) {}

  create(parametre: ILaboratoire): Observable<EntityResponseType> {
    return this.http.post<ILaboratoire>(this.resourceUrl, parametre, { observe: 'response' });
  }



  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ILaboratoire>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(): Observable<HttpResponse<IContentList>> {

    return this.http.get<IContentList>(this.resourceUrl.concat('&vue=list'), {  observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
