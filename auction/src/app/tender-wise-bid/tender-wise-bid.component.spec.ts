import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderWiseBidComponent } from './tender-wise-bid.component';

describe('TenderWiseBidComponent', () => {
  let component: TenderWiseBidComponent;
  let fixture: ComponentFixture<TenderWiseBidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderWiseBidComponent]
    });
    fixture = TestBed.createComponent(TenderWiseBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
