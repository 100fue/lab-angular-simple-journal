import { Component, OnInit } from '@angular/core';
import { JournalService } from "../../services/journal.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  list: Array<any>;

  constructor(public Js: JournalService) {
    this.Js.getList().subscribe(list => this.list = list);
  }

  ngOnInit() {
  }

}
