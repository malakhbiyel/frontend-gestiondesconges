import { Component } from '@angular/core';
import { Item } from 'src/app/models/item3.model';
import { CongeService } from 'src/app/services/conge.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gestion-conge',
  templateUrl: './gestion-conge.component.html',
  styleUrls: ['./gestion-conge.component.scss']
})
export class GestionCongeComponent{
  items: Item[] =[];
  availableBalance: number = this.congeService.calculateAvailableBalance();

  constructor(private congeService: CongeService,private router: Router,private location: Location) {
    const fetchedItems = this.congeService.getHolidays();
    this.items = [...this.items, ...fetchedItems]; // Append fetched data to the initial data
  }

  navNouveauconge(){
    this.router.navigate(['/nouveauconge'],{queryParams:{data:this.availableBalance}})
  }

  navigateBackToMenu() {
  this.location.back();
}
}
