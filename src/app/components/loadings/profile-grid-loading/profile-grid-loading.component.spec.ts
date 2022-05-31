import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGridLoadingComponent } from './profile-grid-loading.component';

describe('ProfileGridLoadingComponent', () => {
  let component: ProfileGridLoadingComponent;
  let fixture: ComponentFixture<ProfileGridLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGridLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGridLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
