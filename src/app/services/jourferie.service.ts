import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item2.model';

@Injectable({
  providedIn: 'root'
})
export class JourferieService {
  private holidays: Item[] = [];

  getHolidays(): Item[] {
    return this.holidays;
  }

  addHoliday(newHoliday: Item) {
    this.holidays.push(newHoliday);
  }
  
}
