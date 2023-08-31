import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item3.model';
import { CongeService } from 'src/app/services/conge.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reprise',
  templateUrl: './reprise.component.html',
  styleUrls: ['./reprise.component.scss']
})
export class RepriseComponent implements OnInit{
  formData: Item = new Item('', '','',0);
  duree: number=0 ;
  calculatedConsumedDuration: number = 0;
  
  constructor(
    private congeService: CongeService,
    private router: Router,
    private route: ActivatedRoute ,
    private location: Location
  ) {}
  
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any)=>{
      this.duree= params.data
      this.duree = this.congeService.getLastLeaveDuration();
    })
    
}


updateConsumedDuration() {
  const lastLeave = this.congeService.getLastLeave();
  if (lastLeave) {
    const newDate = new Date(this.formData.dateDeFin).getTime();
    const currentDate = new Date(lastLeave.dateDeFin).getTime();
    const daysDifference = Math.floor((newDate - currentDate) / (1000 * 60 * 60 * 24));
    this.calculatedConsumedDuration = lastLeave.duree + daysDifference;
  }
}
onSubmit() {
  // Update the "Motif" of the last leave using the service method
  this.congeService.updateLastLeaveMotif(this.formData.motif);
  const lastLeave = this.congeService.getLastLeave();
    if (lastLeave) {
      lastLeave.dateDeFin = this.formData.dateDeFin;
      lastLeave.duree = this.congeService.calculateDuration(new Date(lastLeave.dateDeDebut), new Date(lastLeave.dateDeFin));
      this.congeService.calculateAvailableBalance();
    }
  this.router.navigate(['/gestionconge']);
}

navigateBackToMenu() {
  this.location.back();
}
}
