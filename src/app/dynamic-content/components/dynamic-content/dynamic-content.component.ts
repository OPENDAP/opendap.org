import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, Directive, ElementRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataReaderService } from 'src/app/services/data-reader.service';
import { DomSanitizer } from '@angular/platform-browser';

export interface Heading {
  title: string;
  id: string;
}

@Pipe({ name: 'safe' })
export class SafeHtml implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

@Directive({
  selector: '[appDomChange]'
})
export class DomChangeDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    const observer = new MutationObserver(mutations => {
      mutations.forEach((mutation) => {
        console.log(mutation.type);
      });
    });

    const config = { attributes: true, childList: true, characterData: true };

    observer.observe(this.elRef.nativeElement, config);
  }
}

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss', '../../sass/adoc-simple.scss']
})
export class DynamicContentComponent implements OnDestroy {

  public content: any;

  public headings: Heading[] = [];

  private _routeSub: Subscription = new Subscription();

  constructor(
    private _dataReaderService: DataReaderService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._routeSub.add(this._route.params.subscribe(param => {
      this._routeSub.add(this._dataReaderService.getPage(param.query).subscribe(data => {
        this.content = data;
        setTimeout(() => {
          this.headings.length = 0;
          const h2 = document.getElementsByTagName('h2');
          Array.from(h2).forEach(item => {
            item.id = item.innerText.replace(/ /g, '-').toLowerCase();
            this.headings.push({
              id: item.id,
              title: item.innerText
            });
          });
        }, 0);
      }, error => {
        this._router.navigate(['/404']);
      }));
    }));
  }

  ngOnDestroy(): void {
    this._routeSub.unsubscribe();
  }
}
