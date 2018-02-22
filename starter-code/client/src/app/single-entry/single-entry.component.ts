import { Component, OnInit } from '@angular/core';
import { JournalService } from "../../services/journal.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  journal: Array<any>;

  constructor(public Js: JournalService, private router:Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getListDetails(params['id']);
      this.getListDetails(params['id']);
    });
  }

  getListDetails(id) {
    this.Js.get(id)
      .subscribe((l) => {
        this.journal = l;
      });
  }

}
