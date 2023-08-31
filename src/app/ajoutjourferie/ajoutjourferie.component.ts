import { Component } from '@angular/core';
import { JourferieService } from 'src/app/services/jourferie.service';
import { Item } from 'src/app/models/item2.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajoutjourferie',
  templateUrl: './ajoutjourferie.component.html',
  styleUrls: ['./ajoutjourferie.component.scss']
})
export class AjoutjourferieComponent {
  formData: Item = new Item('', '', '', '');

  constructor(
    private jourferieService: JourferieService,
    private router: Router // Inject the Router
  ) {}

  onSubmit() {
      this.jourferieService.addHoliday(this.formData);
      // Navigate back to JourferieComponent
      this.router.navigate(['/jourferie']);
    }
    
}
