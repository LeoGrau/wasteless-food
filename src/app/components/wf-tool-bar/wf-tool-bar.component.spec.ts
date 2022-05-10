import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfToolBarComponent } from './wf-tool-bar.component';

describe('WfToolBarComponent', () => {
  let component: WfToolBarComponent;
  let fixture: ComponentFixture<WfToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
