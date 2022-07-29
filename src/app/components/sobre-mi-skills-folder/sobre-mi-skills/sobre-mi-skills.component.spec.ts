import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiSkillsComponent } from './sobre-mi-skills.component';

describe('SobreMiSkillsComponent', () => {
  let component: SobreMiSkillsComponent;
  let fixture: ComponentFixture<SobreMiSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
