import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalBannerUiComponent } from './promotional-banner-ui.component';

describe('PromotionalBannerUiComponent', () => {
  let component: PromotionalBannerUiComponent;
  let fixture: ComponentFixture<PromotionalBannerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalBannerUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalBannerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
