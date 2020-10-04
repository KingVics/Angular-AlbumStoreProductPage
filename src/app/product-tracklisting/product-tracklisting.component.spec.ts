import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrackListing } from './product-tracklisting.component';

describe('ProductPageComponent', () => {
  let component: ProductTrackListing;
  let fixture: ComponentFixture<ProductTrackListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTrackListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrackListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
