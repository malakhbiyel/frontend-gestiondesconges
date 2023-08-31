import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourferieComponent } from './jourferie.component';

describe('JourferieComponent', () => {
  let component: JourferieComponent;
  let fixture: ComponentFixture<JourferieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourferieComponent]
    });
    fixture = TestBed.createComponent(JourferieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
