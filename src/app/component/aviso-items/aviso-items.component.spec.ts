import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisoItemsComponent } from './aviso-items.component';

describe('AvisoItemsComponent', () => {
  let component: AvisoItemsComponent;
  let fixture: ComponentFixture<AvisoItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisoItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
