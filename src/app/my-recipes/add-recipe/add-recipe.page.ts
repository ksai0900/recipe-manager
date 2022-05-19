import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  recipeImgUrlBuilder = 'assets/recipe_images/42.jpg';


  public formData: FormGroup;

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.formData = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      ingredients: new FormControl([]),
    });
  }

  onSubmit() {
    console.log(this.formData.value);
    this.dataService.addRecipe(this.formData.value);
  }

  onFileSelected(event) {
    console.log(event);
    if(event.target.file) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (item: any) => {
        this.recipeImgUrlBuilder = event.target.result;
      };
    }
  }

}
