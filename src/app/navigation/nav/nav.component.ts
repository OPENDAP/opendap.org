import { Component, OnInit, Input } from '@angular/core';
import { DynamicRoutesService } from 'src/app/services/dynamic-routes.service';
import { Versions } from 'src/app/shared/models/versions';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() hideOnScroll: number;

  versions: Versions[];

  constructor(
    private dataReaderService: DataReaderService,
    public routes: DynamicRoutesService
  ) { }

  ngOnInit() {
    this.dataReaderService.getReleaseData().subscribe(data => {
      this.versions = data.versions;
    });
  }

}
