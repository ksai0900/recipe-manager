import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { MyRecipePage } from './my-recipe.page';

describe('MyRecipePage', () => {
  let component: MyRecipePage;
  let fixture: ComponentFixture<MyRecipePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MyRecipePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
