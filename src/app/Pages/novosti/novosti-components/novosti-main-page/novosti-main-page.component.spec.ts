import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiMainPageComponent } from './novosti-main-page.component';

describe('NovostiMainPageComponent', () => {
  let component: NovostiMainPageComponent;
  let fixture: ComponentFixture<NovostiMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovostiMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovostiMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
