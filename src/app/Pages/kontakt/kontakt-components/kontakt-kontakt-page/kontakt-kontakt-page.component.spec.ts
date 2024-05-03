import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktKontaktPageComponent } from './kontakt-kontakt-page.component';

describe('KontaktKontaktPageComponent', () => {
  let component: KontaktKontaktPageComponent;
  let fixture: ComponentFixture<KontaktKontaktPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KontaktKontaktPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontaktKontaktPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
