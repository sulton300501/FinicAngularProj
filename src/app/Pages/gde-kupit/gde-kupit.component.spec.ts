import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdeKupitComponent } from './gde-kupit.component';

describe('GdeKupitComponent', () => {
  let component: GdeKupitComponent;
  let fixture: ComponentFixture<GdeKupitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GdeKupitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GdeKupitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
