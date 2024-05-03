import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiMainInPageComponent } from './novosti-main-in-page.component';

describe('NovostiMainInPageComponent', () => {
  let component: NovostiMainInPageComponent;
  let fixture: ComponentFixture<NovostiMainInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovostiMainInPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovostiMainInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
