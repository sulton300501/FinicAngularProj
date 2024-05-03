import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCrouselCardsPageComponent } from './home-crousel-cards-page.component';

describe('HomeCrouselCardsPageComponent', () => {
  let component: HomeCrouselCardsPageComponent;
  let fixture: ComponentFixture<HomeCrouselCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCrouselCardsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCrouselCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
