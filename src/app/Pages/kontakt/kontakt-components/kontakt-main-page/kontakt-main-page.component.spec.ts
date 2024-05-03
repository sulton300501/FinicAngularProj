import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktMainPageComponent } from './kontakt-main-page.component';

describe('KontaktMainPageComponent', () => {
  let component: KontaktMainPageComponent;
  let fixture: ComponentFixture<KontaktMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KontaktMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontaktMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
