import { Component, OnInit } from '@angular/core';
import { TeamMember, teamMembersWorklog } from '../../constants/team-members';
import { extraScope, minScope, normalScope, ScopeItem } from '../../constants/scopes';

@Component({
  selector: 'app-our-worklog',
  templateUrl: './our-worklog.component.html',
  styleUrls: ['./our-worklog.component.scss']
})
export class OurWorklogComponent implements OnInit {
  public displayedColumns: string[] = ['feature', 'time'];
  public team: TeamMember[] = teamMembersWorklog;
  public minScope: ScopeItem[] = minScope;
  public normalScope: ScopeItem[] = normalScope;
  public extraScope: ScopeItem[] = extraScope;
  public minScopeTotal: number;
  public minScopeActual: number;
  public normalScopeTotal: number;
  public normalScopeActual: number;
  public extraScopeTotal: number;
  public extraScopeActual: number;
  public totalScore: number;
  public actualScore: number;
  constructor() {
    this.minScopeTotal = this.minScope.reduce((acc, item) => acc + item.value, 0);
    this.normalScopeTotal = this.normalScope.reduce((acc, item) => acc + item.value, 0);
    this.extraScopeTotal = this.extraScope.reduce((acc, item) => acc + item.value, 0);
    this.totalScore = this.minScopeTotal + this.normalScopeTotal + this.extraScopeTotal;
  }

  ngOnInit(): void {
    this.onMinScopeChange();
    this.onNormalScopeChange();
    this.onExtraScopeChange();
  }

  public onMinScopeChange(): void {
    this.minScopeActual = this.minScope
      .filter(item => item.completed)
      .reduce((acc, item) => acc + item.value, 0);
    this.countActualScore();
  }
  public onNormalScopeChange(): void {
    this.normalScopeActual = this.normalScope
      .filter(item => item.completed)
      .reduce((acc, item) => acc + item.value, 0);
    this.countActualScore();
  }
  public onExtraScopeChange(): void {
    this.extraScopeActual = this.extraScope
      .filter(item => item.completed)
      .reduce((acc, item) => acc + item.value, 0);
    this.countActualScore();
  }
  public countActualScore(): void {
    this.actualScore = this.minScopeActual + this.normalScopeActual + this.extraScopeActual;
  }
}
