import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DileramMainPageComponent } from './dileram-main-page.component';

describe('DileramMainPageComponent', () => {
  let component: DileramMainPageComponent;
  let fixture: ComponentFixture<DileramMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DileramMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DileramMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
