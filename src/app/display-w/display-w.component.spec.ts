import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWComponent } from './display-w.component';

describe('DisplayWComponent', () => {
  let component: DisplayWComponent;
  let fixture: ComponentFixture<DisplayWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
