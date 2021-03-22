import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <div class="not-found">
    <img src="../../../assets/images/hal_flat.png" alt="Oops!">

    <div>
      <h1>404 - Not Found</h1>
      <h2>I'm sorry, Dave. I'm afraid I can't do that.</h2>

      <p>
        We couldn't find (maybe lost?) the page you were looking for.
        Try out one of the links below to assist you on
        your journey, or reach out to support@opendap.org for assistance:
      </p>
      <ul>
        <li><a routerLink=''>Home</a></li>
        <li><a routerLink='/software'>Software</a></li>
        <li><a routerLink='/support'>Support</a></li>
        <li><a routerLink='/support/faq'>FAQ</a></li>
        <li><a routerLink='/about'>About OPeNDAP</a></li>
      </ul>
    </div>
  </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      max-width: 800px;
      margin: auto;
    }

    img {
      width: 300px;
      height: 300px;
    }

    p {
      text-align: justify;
    }

    h1 {
      font-weight: 300;
      margin-bottom: 0;
      font-size: 2em;
      line-height: 1.5em;
    }

    h2 {
      font-family: 'Roboto Slab', serif;
      font-weight: 300;
    }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
