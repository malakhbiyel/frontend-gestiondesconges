import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DemandecheckedService } from 'src/app/services/demandechecked.service';
@Component({
  selector: 'app-gestion-demande',
  templateUrl: './gestion-demande.component.html',
  styleUrls: ['./gestion-demande.component.scss']
})
export class GestionDemandeComponent {
  items: Item[] = [
    new Item('mohahmed', new Date('2023/06/10'), new Date('2023/06/15'), 'vacance'),
    new Item('amine', new Date('2023/06/10'), new Date('2023/06/15'), 'vacance'),
    new Item('achraf', new Date('2023/06/10'), new Date('2023/06/15'), 'vacance')
    // Add more items as needed
  ];
  constructor(private demandeService: DemandecheckedService) {
  }

  acceptDemande(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1); // Remove from demande table
      this.demandeService.addDemande(item); // Add to conge cadre table
    }
  }

  declineDemande(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1); // Remove from demande table
    }
  }
}
