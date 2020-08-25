import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCommunicatorComponent } from './rest-communicator.component';

describe('RestCommunicatorComponent', () => {
  let component: RestCommunicatorComponent;
  let fixture: ComponentFixture<RestCommunicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestCommunicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestCommunicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
