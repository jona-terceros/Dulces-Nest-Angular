import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcesDetailComponent } from './dulces-detail.component';

describe('DulcesDetailComponent', () => {
  let component: DulcesDetailComponent;
  let fixture: ComponentFixture<DulcesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulcesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DulcesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
