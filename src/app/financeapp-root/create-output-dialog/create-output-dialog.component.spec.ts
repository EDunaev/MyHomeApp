import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutputDialogComponent } from './create-output-dialog.component';

describe('CreateOutputDialogComponent', () => {
  let component: CreateOutputDialogComponent;
  let fixture: ComponentFixture<CreateOutputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOutputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOutputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
