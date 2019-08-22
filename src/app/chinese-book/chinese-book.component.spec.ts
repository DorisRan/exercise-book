import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseBookComponent } from './chinese-book.component';

describe('ChineseBookComponent', () => {
  let component: ChineseBookComponent;
  let fixture: ComponentFixture<ChineseBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
