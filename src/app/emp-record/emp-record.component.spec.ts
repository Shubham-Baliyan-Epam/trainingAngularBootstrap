import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRecordComponent } from './emp-record.component';

describe('EmpRecordComponent', () => {
  let component: EmpRecordComponent;
  let fixture: ComponentFixture<EmpRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
