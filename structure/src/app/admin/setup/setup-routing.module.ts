import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { SubcategoryComponent } from "./subcategory/subcategory.component";

const routes: Routes = [
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "subcategory",
    component: SubcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
