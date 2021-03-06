import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getReleaseData().subscribe(data => {
      this.versions = data.versions;
    });
  }

}
