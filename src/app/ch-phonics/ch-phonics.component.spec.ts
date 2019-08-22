import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChPhonicsComponent } from './ch-phonics.component';

describe('ChPhonicsComponent', () => {
  let component: ChPhonicsComponent;
  let fixture: ComponentFixture<ChPhonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPhonicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChPhonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
