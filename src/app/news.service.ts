import { Injectable } from "@angular/core";
import { NewsApiService } from "angular-news-api";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class NewsService {
    constructor(private newsApiService: NewsApiService) {}

    topHeadlines(searchVal, callback) {
        this.newsApiService
            .topHeadlines({
                language: "en",
                q: searchVal
            })
            .subscribe(data => callback(data.articles));
    }

    everything() {
        this.newsApiService
            .everything({
                q: "trump"
            })
            .subscribe(data => console.log(data));
    }

    sources() {
        this.newsApiService
            .sources({
                country: "us"
            })
            .subscribe(data => console.log(data));
    }

    /**
     * Consume the NewsApiService here, make sure
     * to set the language to 'en' english and built
     * in the search functionality using the 'q'
     * variable in API calls to news-api
     */
}
