import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZashitaProektiMainPageComponent } from './zashita-proekti-main-page.component';

describe('ZashitaProektiMainPageComponent', () => {
  let component: ZashitaProektiMainPageComponent;
  let fixture: ComponentFixture<ZashitaProektiMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZashitaProektiMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZashitaProektiMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
