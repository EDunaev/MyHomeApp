import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSchichtComponent } from './change-schicht.component';

describe('ChangeSchichtComponent', () => {
  let component: ChangeSchichtComponent;
  let fixture: ComponentFixture<ChangeSchichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSchichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSchichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
