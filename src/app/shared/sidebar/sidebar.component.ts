import { Component, OnInit } from '@angular/core';
import { menus } from 'src/app/admin/menus';

import * as moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {

  links: any[] = [];
  tooltip: string;

  private version = window.APP_VERSION;
  private build = window.APP_BUILD;
  public copyright = `Copyright &copy; ${new Date().getFullYear()} BNDY.NET`;

  constructor() {
    if (window.APP_VERSION && window.APP_BUILD) {
      let v = `VERSION ${this.version}`;
      let b = `BUILD   ${moment(new Date(this.build)).format('YYYY-MM-DD HH:mm:ss')}`;
      const maxLen = v.length > b.length ? v.length : b.length;
      if (v.length < maxLen) {
        v = v.replace(' ', ''.padEnd(maxLen - v.length + 1, ' '));
      }
      if (b.length < maxLen) {
        b = b.replace(' ', ''.padEnd(maxLen - b.length + 1, ' '));
      }

      this.tooltip  = `${v}\n${b}`;
    }
  }

  ngOnInit(): void {
    this.links = menus;
  }
}
