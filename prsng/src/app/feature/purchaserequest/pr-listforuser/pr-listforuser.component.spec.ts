import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrListforuserComponent } from './pr-listforuser.component';

describe('PrListforuserComponent', () => {
  let component: PrListforuserComponent;
  let fixture: ComponentFixture<PrListforuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrListforuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrListforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
