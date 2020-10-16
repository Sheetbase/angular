import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetbaseComponent } from './sheetbase.component';

describe('SheetbaseComponent', () => {
  let component: SheetbaseComponent;
  let fixture: ComponentFixture<SheetbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
