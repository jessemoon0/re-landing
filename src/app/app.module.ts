import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeaturesComponent } from './features/features.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeComponent } from './home-list/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RealtorsComponent } from './realtors/realtors.component';
import { ReviewPicturesComponent } from './review-pictures/review-pictures.component';
import { ReviewContentComponent } from './review-content/review-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    FeaturesComponent,
    HomeListComponent,
    HomeComponent,
    SidebarComponent,
    RealtorsComponent,
    ReviewPicturesComponent,
    ReviewContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
