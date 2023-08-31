import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedSpace: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.selectedSpace = params['space'];
    });
  }

  onLogin() {
    // Navigate to the appropriate menu based on the selected space
    if (this.selectedSpace === 'cadre') {
      this.router.navigate(['/menucadre']);
    } else if (this.selectedSpace === 'responsable') {
      this.router.navigate(['/menuresponsable']);
    } else if (this.selectedSpace === 'rh') {
      this.router.navigate(['/menurh']);
    }
  }
}
