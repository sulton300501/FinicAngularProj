import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIAComponent } from './d-i-a.component';

describe('DIAComponent', () => {
  let component: DIAComponent;
  let fixture: ComponentFixture<DIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DIAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
