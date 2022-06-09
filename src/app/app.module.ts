import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CardComponent } from './components/card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component'

import { RouterModule } from '@angular/router';
import { ShowPostComponent } from './components/show-post/show-post.component';

const routes = [
  {path: "", component: ListPostsComponent },
  {path: "posts/create", component: CreatePostComponent },
  {path: "posts/:id", component: ShowPostComponent },
  {path: "courses", component: CoursesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    TableComponent,
    ListComponent,
    HomeComponent,
    CoursesComponent,
    CardComponent,
    ListPostsComponent,
    CreatePostComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
