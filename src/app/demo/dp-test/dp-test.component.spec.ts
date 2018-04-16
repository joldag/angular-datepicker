import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DayCalendarComponent} from '../../';
import { DpTestComponent } from './dp-test.component';

describe('DpTestComponent', () => {
  let component: DpTestComponent;
  let fixture: ComponentFixture<DpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        DpTestComponent,
        DayCalendarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
