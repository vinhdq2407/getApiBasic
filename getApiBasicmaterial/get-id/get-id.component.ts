import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css'],
})
export class GetIdComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'userId', 'title'];
  data: Array<any>;
  resultsLength = 0;
  pageSize = 10;

  constructor(private apiService: ApiService) {
    this.data = new Array<any>();
  }

  getDataApi() {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.getDataApi();
  }



}
