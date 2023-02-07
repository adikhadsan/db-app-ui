import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTestingComponent } from './request-testing.component';

describe('RequestTestingComponent', () => {
  let component: RequestTestingComponent;
  let fixture: ComponentFixture<RequestTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
