import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSpaceComponent } from './result-space.component';

describe('ResultSpaceComponent', () => {
  let component: ResultSpaceComponent;
  let fixture: ComponentFixture<ResultSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
