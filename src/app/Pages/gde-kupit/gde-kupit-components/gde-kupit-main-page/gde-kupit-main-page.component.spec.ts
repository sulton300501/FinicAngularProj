import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdeKupitMainPageComponent } from './gde-kupit-main-page.component';

describe('GdeKupitMainPageComponent', () => {
  let component: GdeKupitMainPageComponent;
  let fixture: ComponentFixture<GdeKupitMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GdeKupitMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GdeKupitMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
