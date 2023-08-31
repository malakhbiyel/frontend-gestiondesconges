import { Component } from '@angular/core';
import { Item } from 'src/app/models/item2.model';
import { JourferieService } from 'src/app/services/jourferie.service';

@Component({
  selector: 'app-jourferie',
  templateUrl: './jourferie.component.html',
  styleUrls: ['./jourferie.component.scss']
})
export class JourferieComponent {
  items: Item[] = [
    new Item('aid1', new Date('2023/06/10').toDateString(), new Date('2023/06/15').toDateString(), 'national'),
    new Item('aid2', new Date('2023/06/10').toDateString(), new Date('2023/06/15').toDateString(), 'national'),
    new Item('aid3', new Date('2023/06/10').toDateString(), new Date('2023/06/15').toDateString(), 'religieux')
    // Add more items as needed
  ];
  constructor(private jourferieService: JourferieService) {
    const fetchedItems = this.jourferieService.getHolidays();
    this.items = [...this.items, ...fetchedItems]; // Append fetched data to the initial data
  }
  
  
}

