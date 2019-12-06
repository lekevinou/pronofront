import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../../Models/competition';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Scale } from 'src/app/Models/scale';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  public addContest() {
    this.router.navigate(['/addcontests']);
  }

  public findAll(): Observable<Competition[]> {
    const url = this.baseUrl + '/contests';
    return this.http.get<Competition[]>(url);
  }

  public get(id: number): Observable<Competition> {
    const url = this.baseUrl + '/contests/' + id;
    return this.http.get<Competition>(url);
  }

  public save(contest: Competition) {
    const url = this.baseUrl + '/contests';
    return this.http.post<Competition>(url, contest);
  }

  public update(contest: Competition) {
    const url = this.baseUrl + '/contests';
    return this.http.put<Competition>(url, contest);
  }

  public delete(id:number){
    let url = this.baseUrl + '/contests/' + id;
    return this.http.delete(url);
  }

  public goToContestList() {
    this.router.navigate(['/contests']);
  }

  public goToHome() {
    this.router.navigate(['/']);
  }

  public findAllScalesByContest(id:number):Observable<Scale[]> {
    const url = this.baseUrl + '/contests/' + id + '/scales';
    return this.http.get<Scale[]>(url);
  }

  goToContestDetails(contestId: number) {
    this.router.navigate(['contests/' + contestId]);
  }

  goToContestUpdate(id: number) {
    this.router.navigate(['updateContest/' + id]);
  }
}
