import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCadreComponent } from './menu-cadre.component';

describe('MenuCadreComponent', () => {
  let component: MenuCadreComponent;
  let fixture: ComponentFixture<MenuCadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCadreComponent]
    });
    fixture = TestBed.createComponent(MenuCadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
