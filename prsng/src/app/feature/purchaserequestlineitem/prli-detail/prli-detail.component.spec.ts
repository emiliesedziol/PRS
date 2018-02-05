import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrliDetailComponent } from './prli-detail.component';

describe('PrliDetailComponent', () => {
  let component: PrliDetailComponent;
  let fixture: ComponentFixture<PrliDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrliDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrliDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
