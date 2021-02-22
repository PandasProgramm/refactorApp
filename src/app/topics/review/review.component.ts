import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../services/http-api.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

constructor(private httpApiService:HttpApiService) { }

  ngOnInit(): void {

    }

}
