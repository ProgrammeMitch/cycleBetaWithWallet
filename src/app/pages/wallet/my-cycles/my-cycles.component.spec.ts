import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCyclesComponent } from './my-cycles.component';

describe('MyCyclesComponent', () => {
  let component: MyCyclesComponent;
  let fixture: ComponentFixture<MyCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
