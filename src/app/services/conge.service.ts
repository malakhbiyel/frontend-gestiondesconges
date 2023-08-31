import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item3.model';
@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private holidays: Item[] = [
    new Item('vacance', new Date('2023/06/10').toDateString(), new Date('2023/06/15').toDateString(),6),
    new Item('vacance2', new Date('2023/06/10').toDateString(), new Date('2023/06/15').toDateString(),6),
    new Item('vacance3', new Date('2023/06/10').toDateString(), new Date('2023/06/15').toDateString(),6)
    // Add more items as needed
  ];
  
  getLastLeaveDuration(): number {
    const lastLeave = this.getLastLeave();
    return lastLeave ? lastLeave.duree : -1;
  }

  getLastLeave(): Item | null {
    return this.holidays.length > 0 ? this.holidays[this.holidays.length - 1] : null;
  }
  getHolidays(): Item[] {
    return this.holidays;
  }

  addHoliday(newHoliday: Item) {
    newHoliday.duree = this.calculateDuration(new Date(newHoliday.dateDeDebut),new Date(newHoliday.dateDeFin));
    this.holidays.push(newHoliday);
  }

    // Calculate total used leave days
    totalUsedLeaveDays() {
      return this.holidays.reduce((total, item) => total + this.calculateDuration(new Date(item.dateDeDebut), new Date(item.dateDeFin)), 0);
    }
    
    // Calculate available leave balance
    calculateAvailableBalance() {
      const maxLeaveDays = 22; // Maximum allowed leave days
      return maxLeaveDays - this.totalUsedLeaveDays();
    }
    // Calculate duration based on date difference
    calculateDuration(startDate: Date, endDate: Date) {
      const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysDifference+1;
    }

    updateLastLeaveMotif(newMotif: string) {
      const lastLeave = this.getLastLeave();
      if (lastLeave) {
        lastLeave.motif = newMotif;
      }
    }

}
