import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugiMainPageComponent } from './uslugi-main-page.component';

describe('UslugiMainPageComponent', () => {
  let component: UslugiMainPageComponent;
  let fixture: ComponentFixture<UslugiMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UslugiMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UslugiMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
