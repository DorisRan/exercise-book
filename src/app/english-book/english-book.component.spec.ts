import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishBookComponent } from './english-book.component';

describe('EnglishBookComponent', () => {
  let component: EnglishBookComponent;
  let fixture: ComponentFixture<EnglishBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
