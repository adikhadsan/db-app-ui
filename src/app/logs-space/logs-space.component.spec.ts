import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsSpaceComponent } from './logs-space.component';

describe('LogsSpaceComponent', () => {
  let component: LogsSpaceComponent;
  let fixture: ComponentFixture<LogsSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
