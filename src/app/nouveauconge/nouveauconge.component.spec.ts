import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaucongeComponent } from './nouveauconge.component';

describe('NouveaucongeComponent', () => {
  let component: NouveaucongeComponent;
  let fixture: ComponentFixture<NouveaucongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveaucongeComponent]
    });
    fixture = TestBed.createComponent(NouveaucongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
