import { Component, OnInit } from '@angular/core';
import { TeamMember, teamMembersWorklog } from '../../constants/team-members';

@Component({
  selector: 'app-our-worklog',
  templateUrl: './our-worklog.component.html',
  styleUrls: ['./our-worklog.component.scss']
})
export class OurWorklogComponent implements OnInit {
  public displayedColumns: string[] = ['feature', 'time'];
  public team: TeamMember[] = teamMembersWorklog;
  constructor() {}

  ngOnInit(): void {}
}
