import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspComponent } from './editsp.component';

describe('EditspComponent', () => {
  let component: EditspComponent;
  let fixture: ComponentFixture<EditspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditspComponent]
    });
    fixture = TestBed.createComponent(EditspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
