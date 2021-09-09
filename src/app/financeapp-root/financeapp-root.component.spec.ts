import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceappRootComponent } from './financeapp-root.component';

describe('FinanceappRootComponent', () => {
  let component: FinanceappRootComponent;
  let fixture: ComponentFixture<FinanceappRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceappRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceappRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
