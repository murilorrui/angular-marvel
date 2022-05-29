import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersLoadingComponent } from './characters-loading.component';

describe('CharactersLoadingComponent', () => {
  let component: CharactersLoadingComponent;
  let fixture: ComponentFixture<CharactersLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
