import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SearchFormComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [SearchFormComponent],
})
export class SharedModule {}
