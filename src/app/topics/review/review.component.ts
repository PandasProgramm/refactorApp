import { Component, OnInit } from '@angular/core';
import {SelectTopicService} from '../services/select-topic.service';
import {User} from '../../models/users/User';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private http:SelectTopicService) { }

  ngOnInit(): void {
    let user:User;
    this.http.getUser(1).subscribe((useri:User)=>{
        user= useri;
        alert(user.email)
    }

    )
  }

}
