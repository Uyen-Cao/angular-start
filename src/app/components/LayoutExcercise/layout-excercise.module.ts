import { NgModule } from '@angular/core';
import { ContentsComponent } from './contents.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { LayoutExcerciseComponent } from './layout-excercise.component';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  imports: [],
  declarations: [
    LayoutExcerciseComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent,
    SideBarComponent,
  ],
  exports: [LayoutExcerciseComponent],
  providers: [],
})
export class LayoutExcerciseModule {}
