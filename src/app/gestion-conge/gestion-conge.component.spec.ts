import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCongeComponent } from './gestion-conge.component';

describe('GestionCongeComponent', () => {
  let component: GestionCongeComponent;
  let fixture: ComponentFixture<GestionCongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCongeComponent]
    });
    fixture = TestBed.createComponent(GestionCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
