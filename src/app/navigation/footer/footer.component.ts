import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <p>
      Copyright ©2020 OPeNDAP™<br>
      165 Dean Knauss Dr., Narragansett, RI 02882, +1.401.284.1304<br>
      Advanced Software for Remote Data Retrieval.
    </p>
  </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { }
