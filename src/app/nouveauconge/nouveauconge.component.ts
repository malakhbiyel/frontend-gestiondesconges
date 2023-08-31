import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item3.model';
import { CongeService } from 'src/app/services/conge.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nouveauconge',
  templateUrl: './nouveauconge.component.html',
  styleUrls: ['./nouveauconge.component.scss']
})
export class NouveaucongeComponent implements OnInit {
  formData: Item = new Item('', '','',0);
  availableBalance: number=0 ;
  holidaysInRange: number = 0;
  filteredLeaves: Item[] = [];


  constructor(
    private congeService: CongeService,
    private router: Router,
    private route: ActivatedRoute ,
    private location: Location

  ) {}

  onSubmit() {
    const calculatedDuration = this.congeService.calculateDuration(
      new Date(this.formData.dateDeDebut),
      new Date(this.formData.dateDeFin)
    );

    if (this.availableBalance - calculatedDuration >= 0) {
      this.congeService.addHoliday(this.formData);
      this.router.navigate(['/gestionconge']);
    } else {
      // Show a warning or prevent submitting the form
      alert('Votre solde est insuffisant');
    }
    }
    
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any)=>{
      this.availableBalance= params.data
      this.availableBalance = this.congeService.calculateAvailableBalance();
    })
  }
  navigateBackToMenu() {
    this.location.back();
  }
  
}
