import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTitleComponent } from './theme-title.component';

describe('ThemeTitleComponent', () => {
  let component: ThemeTitleComponent;
  let fixture: ComponentFixture<ThemeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
