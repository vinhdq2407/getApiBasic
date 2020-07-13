import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
})
export class IdComponent implements OnInit {
  data: Array<any>;

  constructor(private apiService: ApiService) {
    this.data = new Array<any>();
  }

  getDataFromApi() {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
  ngOnInit(): void {
    this.getDataFromApi();
  }
}
