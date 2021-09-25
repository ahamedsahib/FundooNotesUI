import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLabelNotesComponent } from './get-label-notes.component';

describe('GetLabelNotesComponent', () => {
  let component: GetLabelNotesComponent;
  let fixture: ComponentFixture<GetLabelNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLabelNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLabelNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
