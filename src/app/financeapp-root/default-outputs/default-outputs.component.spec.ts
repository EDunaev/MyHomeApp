import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOutputsComponent } from './default-outputs.component';

describe('DefaultOutputsComponent', () => {
  let component: DefaultOutputsComponent;
  let fixture: ComponentFixture<DefaultOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultOutputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
