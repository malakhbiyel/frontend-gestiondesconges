import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutjourferieComponent } from './ajoutjourferie.component';

describe('AjoutjourferieComponent', () => {
  let component: AjoutjourferieComponent;
  let fixture: ComponentFixture<AjoutjourferieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutjourferieComponent]
    });
    fixture = TestBed.createComponent(AjoutjourferieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
