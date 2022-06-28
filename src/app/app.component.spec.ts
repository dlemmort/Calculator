import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calculator');
  });

  it('should add two numbers correctly', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstAdditionNumber = 10;
    app.secondAdditionNumber = 20;
    expect(app.Addition()).toEqual(30);
  });

  it('should substract two numbers correctly', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstSubstractionNumber = 10;
    app.secondSubstractionNumber = 20;
    expect(app.Substraction()).toEqual(-10);
  });

  it('should multiply two numbers correctly', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstMultiplicationNumber = 10;
    app.secondMultiplicationNumber = 20;
    expect(app.Multiplication()).toEqual(200);
  });

  it('should divide two numbers correctly', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstDivisionNumber = 10;
    app.secondDivisionNumber = 20;
    expect(app.Division()).toEqual(0.5);
  });

  it('should substract two numbers correctly', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstExponentiationNumber = 10;
    app.secondExponentiationNumber = 20;
    expect(app.Exponentiation()).toEqual(100000000000000000000);
  });
});
