import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWComponent } from './form-w.component';

describe('FormWComponent', () => {
  let component: FormWComponent;
  let fixture: ComponentFixture<FormWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
