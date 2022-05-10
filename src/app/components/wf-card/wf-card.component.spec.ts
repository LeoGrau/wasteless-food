import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfCardComponent } from './wf-card.component';

describe('WfCardComponent', () => {
  let component: WfCardComponent;
  let fixture: ComponentFixture<WfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
