import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIAMainPageComponent } from './d-i-a-main-page.component';

describe('DIAMainPageComponent', () => {
  let component: DIAMainPageComponent;
  let fixture: ComponentFixture<DIAMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DIAMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DIAMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
