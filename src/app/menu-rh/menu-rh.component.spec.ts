import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRHComponent } from './menu-rh.component';

describe('MenuRHComponent', () => {
  let component: MenuRHComponent;
  let fixture: ComponentFixture<MenuRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuRHComponent]
    });
    fixture = TestBed.createComponent(MenuRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
