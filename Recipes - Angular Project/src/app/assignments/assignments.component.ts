import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  username = '';
  passwords = []
  showSecret = false;
  log = [];

  toggles() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
