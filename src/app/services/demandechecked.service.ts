import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.model';
@Injectable({
  providedIn: 'root'
})
export class DemandecheckedService {

  private demande: Item[] = [];

  getDemande(): Item[] {
    return this.demande;
  }

  addDemande(newDemande: Item) {
    this.demande.push(newDemande);
  }
}
