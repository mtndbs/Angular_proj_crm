import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyNavComponent } from './tiny-nav.component';

describe('TinyNavComponent', () => {
  let component: TinyNavComponent;
  let fixture: ComponentFixture<TinyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
