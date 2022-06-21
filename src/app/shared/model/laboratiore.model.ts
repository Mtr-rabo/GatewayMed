
/*   import { Moment } from 'moment'; */

export interface ILaboratoire {
  id?: number;
  name?: string;
  description?: string;
  create_date?: any;
  create_uid?: string;
  last_update?: any;
  last_update_uid?: string;
  adresseLigne1?:string;
  adresseLigne2?:string;
 // pays?:string;
  email?:string;
  telephone?:number;
  site_web?:string;
  internal_note?:string;

}

export class Laboratoire implements ILaboratoire {
  constructor(
   public id?: number,
   public name?: string,
   public description?: string,
   public create_date?: any,
   public create_uid?: string,
   public last_update?: any,
   public last_update_uid?: string,
   public adresseLigne1?:string,
   public adresseLigne2?:string,
   public pays?:any ,
   public email?:string,
   public telephone?:number,
   public site_web?:string,
   public internal_note?:string,
  ) {}
}
