import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { of } from "rxjs";
import {
    debounceTime,
    map,
    distinctUntilChanged,
    filter
} from "rxjs/operators";
import { fromEvent } from "rxjs";

@Component({
    selector: "app-news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
    public articles: any[] = [];
    public search: string;
    @ViewChild("movieSearchInput") movieSearchInput: ElementRef;
    loading: boolean;

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.fetchArticles();
        fromEvent(this.movieSearchInput.nativeElement, "keyup")
            .pipe(
                // get value
                map((event: any) => {
                    return event.target.value;
                }),
                // if character length greater then 2
                // filter(res => res.length > 2),
                // Time in milliseconds between key events
                debounceTime(600),
                // If previous query is diffent from current
                distinctUntilChanged()
                // subscription for response
            )
            .subscribe((text: string) => {
                this.loading = true;
                this.newsService.topHeadlines(text, data => {
                    this.articles = data;
                    this.loading = false;
                });
            });
    }

    private fetchArticles(search?: string): void {
        // Dummy article for navigation purpose,
        // replace with newsService usage
        this.loading = true;
        this.newsService.topHeadlines(undefined, data => {
            this.articles = data;
            this.loading = false;
        });
    }
}
