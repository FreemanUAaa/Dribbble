import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalBannerBlockComponent } from './promotional-banner-block.component';

describe('PromotionalBannerBlockComponent', () => {
  let component: PromotionalBannerBlockComponent;
  let fixture: ComponentFixture<PromotionalBannerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalBannerBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalBannerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
