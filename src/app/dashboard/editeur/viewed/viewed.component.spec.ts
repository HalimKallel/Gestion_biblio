import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedComponent } from './viewed.component';

describe('ViewedComponent', () => {
  let component: ViewedComponent;
  let fixture: ComponentFixture<ViewedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewedComponent]
    });
    fixture = TestBed.createComponent(ViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
