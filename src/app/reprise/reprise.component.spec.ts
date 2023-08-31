import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepriseComponent } from './reprise.component';

describe('RepriseComponent', () => {
  let component: RepriseComponent;
  let fixture: ComponentFixture<RepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepriseComponent]
    });
    fixture = TestBed.createComponent(RepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
