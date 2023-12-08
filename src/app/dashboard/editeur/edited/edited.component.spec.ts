import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedComponent } from './edited.component';

describe('EditedComponent', () => {
  let component: EditedComponent;
  let fixture: ComponentFixture<EditedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditedComponent]
    });
    fixture = TestBed.createComponent(EditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
