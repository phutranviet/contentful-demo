import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { SeoService } from '../services/seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private contentfulService: ContentfulService,
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {}

  products$: Observable<any> | undefined;

  ngOnInit(): void {
    this.seoService.setData({
      title: 'shoes store',
      description: 'shoes store description',
      author: 'phutranviet',
      type: 'shopping',
      published: new Date().toString(),
    });
    this.products$ = this.contentfulService.getAllProducts();
  }
}
