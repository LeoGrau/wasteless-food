import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCrudViewComponent } from './knowledge-crud-view.component';

describe('KnowledgeCrudViewComponent', () => {
  let component: KnowledgeCrudViewComponent;
  let fixture: ComponentFixture<KnowledgeCrudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeCrudViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCrudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
