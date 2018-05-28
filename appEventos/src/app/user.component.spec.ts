import { TestBed, async } from '@angular/core/testing';
import { UserComponent } from './user.component';
describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
    }).compileComponents();
  }));
  it('should create the user', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const user = fixture.debugElement.componentInstance;
    expect(user).toBeTruthy();
  }));
  it(`should have as title 'user'`, async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('user');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to appEventos!');
  }));
});
