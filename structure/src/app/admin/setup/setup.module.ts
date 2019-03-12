import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SetupRoutingModule } from "./setup-routing.module";
import { FormsModule } from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';

@NgModule({
  imports: [CommonModule, FormsModule, SetupRoutingModule],
  declarations: [CategoryComponent, SubcategoryComponent]
})
export class SetupModule {}
