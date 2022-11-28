import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceSearchComponent } from './dulce-search.component';

describe('DulceSearchComponent', () => {
  let component: DulceSearchComponent;
  let fixture: ComponentFixture<DulceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulceSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DulceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
