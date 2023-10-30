import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-show-dom-encap',
  templateUrl: './show-dom-encap.component.html',
  styleUrls: ['./show-dom-encap.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShowDomEncapComponent {

}
