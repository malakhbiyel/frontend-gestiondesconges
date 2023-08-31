import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private currentMenuRoute: string = '/'; // Default to root

  setCurrentMenuRoute(route: string) {
    this.currentMenuRoute = route;
  }

  getCurrentMenuRoute() {
    return this.currentMenuRoute;
  }
}
