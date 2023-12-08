import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateedComponent } from './createed.component';

describe('CreateedComponent', () => {
  let component: CreateedComponent;
  let fixture: ComponentFixture<CreateedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateedComponent]
    });
    fixture = TestBed.createComponent(CreateedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
