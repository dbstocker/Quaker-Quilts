import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoginDropdownComponent } from './nav-login-dropdown.component';

describe('NavLoginDropdownComponent', () => {
  let component: NavLoginDropdownComponent;
  let fixture: ComponentFixture<NavLoginDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoginDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoginDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
