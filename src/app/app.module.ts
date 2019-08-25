import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { NewsComponent } from "./news/news.component";

import { NgnewsModule } from "angular-news-api";
import { NewsApiKeyConfig } from "angular-news-api";

const newsApiKey = "7e16881bb4084c958fb7f106b017b154";

const newsApiConfig: NewsApiKeyConfig = {
    key: newsApiKey
};

@NgModule({
    declarations: [AppComponent, NewsDetailComponent, NewsComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        NgnewsModule.forRoot(newsApiConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
