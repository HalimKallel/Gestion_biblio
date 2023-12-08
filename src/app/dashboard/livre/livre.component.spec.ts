import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreComponent } from './livre.component';

describe('LivreComponent', () => {
  let component: LivreComponent;
  let fixture: ComponentFixture<LivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivreComponent]
    });
    fixture = TestBed.createComponent(LivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
