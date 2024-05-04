import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZashitaProektiComponent } from './zashita-proekti.component';

describe('ZashitaProektiComponent', () => {
  let component: ZashitaProektiComponent;
  let fixture: ComponentFixture<ZashitaProektiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZashitaProektiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZashitaProektiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
