import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCycleComponent } from './new-cycle.component';

describe('NewCycleComponent', () => {
  let component: NewCycleComponent;
  let fixture: ComponentFixture<NewCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
