import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsEstudiosComponent } from './soft-skills-estudios.component';

describe('SoftSkillsEstudiosComponent', () => {
  let component: SoftSkillsEstudiosComponent;
  let fixture: ComponentFixture<SoftSkillsEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillsEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillsEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
