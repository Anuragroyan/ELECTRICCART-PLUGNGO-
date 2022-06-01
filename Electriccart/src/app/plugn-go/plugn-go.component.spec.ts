import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugnGoComponent } from './plugn-go.component';

describe('PlugnGoComponent', () => {
  let component: PlugnGoComponent;
  let fixture: ComponentFixture<PlugnGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugnGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugnGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
