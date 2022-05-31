import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderLoadingComponent } from './profile-header-loading.component';

describe('ProfileHeaderLoadingComponent', () => {
  let component: ProfileHeaderLoadingComponent;
  let fixture: ComponentFixture<ProfileHeaderLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHeaderLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
