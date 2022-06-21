import { ILaboratoire } from "./laboratiore.model";

export interface IContentList {
  contents?: ILaboratoire[];
  number?: number;
  size?: number;
  total_elements?: number;
  total_page?: number;

}
export class ContentList implements IContentList {
  constructor(
  public contents?: ILaboratoire[],
  public number?: number,
  public size?: number,
  public total_elements?: number,
  public total_page?: number
  ) {}
}
