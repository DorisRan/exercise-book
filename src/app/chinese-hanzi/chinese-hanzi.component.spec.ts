import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseHanziComponent } from './chinese-hanzi.component';

describe('ChineseHanziComponent', () => {
  let component: ChineseHanziComponent;
  let fixture: ComponentFixture<ChineseHanziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseHanziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseHanziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
