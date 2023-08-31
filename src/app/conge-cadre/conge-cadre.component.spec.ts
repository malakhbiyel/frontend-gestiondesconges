import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeCadreComponent } from './conge-cadre.component';

describe('CongeCadreComponent', () => {
  let component: CongeCadreComponent;
  let fixture: ComponentFixture<CongeCadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongeCadreComponent]
    });
    fixture = TestBed.createComponent(CongeCadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
