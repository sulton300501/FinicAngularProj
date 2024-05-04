import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DileramComponent } from './dileram.component';

describe('DileramComponent', () => {
  let component: DileramComponent;
  let fixture: ComponentFixture<DileramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DileramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DileramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
