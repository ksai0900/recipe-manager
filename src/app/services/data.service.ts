import { Firestore, collectionData, doc, docData, deleteDoc, addDoc, collection, updateDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe} from '../interfaces/Recipe';
import { Ingredient} from '../interfaces/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getRecipes(): Observable<Recipe[]>{
    const recipesRef = collection(this.firestore, 'recipes');
    return collectionData(recipesRef, {idField: 'id'}) as Observable<Recipe[]>;
  }

  getRecipeById(id: string): Observable<Recipe>{
    const recipeDocRef = doc(this.firestore, 'recipes/${id}');
    console.log(recipeDocRef);
    return docData(recipeDocRef, {idField: 'id'}) as Observable<Recipe>;
  }

  addRecipe(recipe: Recipe) {
    const recipesRef = collection(this.firestore, 'recipes');
    return addDoc(recipesRef, recipe);
  }

  deleteRecipe(recipe: Recipe) {
    const recipesRef = doc(this.firestore, 'recipes/${recipe.id}');
    return deleteDoc(recipesRef);
  }

  updateRecipe(recipe: Recipe) {
    const recipesRef = doc(this.firestore, 'recipes/${recipe.id}');
    return updateDoc(recipesRef, { title: recipe.title, description: recipe.description, url: recipe.url });
  }



  getIngredients(): Observable<Ingredient[]>{
    const ingredientsRef = collection(this.firestore, 'ingredients');
    return collectionData(ingredientsRef, {idField: 'id'}) as Observable<Ingredient[]>;
  }

  getIngrededientById(id): Observable<Ingredient>{
    const ingredientRef = doc(this.firestore, 'ingredients/${id}');
    console.log(ingredientRef);
    return docData(ingredientRef, {idField: 'id'}) as Observable<Ingredient>;
  }




  getShoppingList(): Observable<Ingredient[]>{
    const ingredientsRef = collection(this.firestore, 'ingredients');
    return collectionData(ingredientsRef, {idField: 'id'}) as Observable<Ingredient[]>;
  }

}
