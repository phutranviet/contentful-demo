import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService,
    private contentfulService: ContentfulService
  ) {}

  products$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const productName = params['productName'];
      this.products$ = this.contentfulService.getEntryById(id);

      this.seoService.setData({
        title: productName,
        description: 'shoes store description',
        author: 'phutranviet',
        type: 'shopping',
        published: new Date().toString(),
      });
    });
  }
}
