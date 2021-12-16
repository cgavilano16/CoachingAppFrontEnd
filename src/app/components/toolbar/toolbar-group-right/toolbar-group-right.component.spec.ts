import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarGroupRightComponent } from './toolbar-group-right.component';

describe('ToolbarGroupRightComponent', () => {
  let component: ToolbarGroupRightComponent;
  let fixture: ComponentFixture<ToolbarGroupRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarGroupRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarGroupRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
