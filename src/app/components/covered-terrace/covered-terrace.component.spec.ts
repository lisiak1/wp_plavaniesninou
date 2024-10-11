import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveredTerraceComponent } from './covered-terrace.component';

describe('CoveredTerraceComponent', () => {
  let component: CoveredTerraceComponent;
  let fixture: ComponentFixture<CoveredTerraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoveredTerraceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoveredTerraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
