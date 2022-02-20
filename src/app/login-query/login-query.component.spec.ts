import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginQueryComponent } from './login-query.component';

describe('LoginQueryComponent', () => {
  let component: LoginQueryComponent;
  let fixture: ComponentFixture<LoginQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
