import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DemandecheckedService } from 'src/app/services/demandechecked.service';
@Component({
  selector: 'app-conge-cadre',
  templateUrl: './conge-cadre.component.html',
  styleUrls: ['./conge-cadre.component.scss']
})
export class CongeCadreComponent {
  items: Item[] = [
    new Item('ahmed', new Date('2023/06/10'), new Date('2023/06/15'), 'vacance'),
    new Item('amine', new Date('2023/06/10'), new Date('2023/06/15'), 'vacance2'),
    new Item('achraf', new Date('2023/06/10'), new Date('2023/06/15'), 'vacance2')
    // Add more items as needed
  ];

  constructor(private demandeService: DemandecheckedService) {
    const fetchedItems = this.demandeService.getDemande();
    this.items = [...this.items, ...fetchedItems]; // Append fetched data to the initial data
  }
  
}
