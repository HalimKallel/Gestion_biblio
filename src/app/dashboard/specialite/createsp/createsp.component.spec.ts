import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatespComponent } from './createsp.component';

describe('CreatespComponent', () => {
  let component: CreatespComponent;
  let fixture: ComponentFixture<CreatespComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatespComponent]
    });
    fixture = TestBed.createComponent(CreatespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
