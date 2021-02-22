import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../../models/topic/TopicTemplate';
import {LearningCard} from '../../models/card-box/LearningCard';
import {catchError, map, retry} from 'rxjs/operators';
import {User} from '../../models/users/User';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private ROOT_URL_TOPICS= " http://localhost:3000/topics";
  private ROOT_URL_CARDS= "http://localhost:3000/chapters";
  private ROOT_URL_USERS="http://localhost:3000/users"

  user:User;

  constructor(private httpClient:HttpClient) { }

  getTopicFromHttp(id:string){
    return this.httpClient.get<Topic[]>(`${this.ROOT_URL_TOPICS}/${id}`);
  }
  getAllCardsFromHttp(topic:string){
    return this.httpClient.get<LearningCard[]>(`${this.ROOT_URL_CARDS}/${topic}`)
      .pipe(
        retry(3),
        catchError(()=>"Verbindung fehlgeschlagen")
      );
  }
  editCard(topic:string,card:LearningCard){
    return this.httpClient.get(`${this.ROOT_URL_CARDS}/${topic}`).pipe(
      map(object => object["cards"])).pipe(map(cards => cards))
  }
  addCard(topic:string,card:LearningCard){
    return this.httpClient.post<LearningCard>(`${this.ROOT_URL_CARDS}/${topic}/cards.json`,card);
  }
  removeCard(topic:string,id:number){
    return this.httpClient.delete<LearningCard>(`${this.ROOT_URL_CARDS}/${topic}/${id}`)
  }


  addUser(user:User){
   user.id="3"

   return  this.httpClient.post<User>(`${this.ROOT_URL_USERS}`,user);
  }
  getUser(id){
    return this.httpClient.get<User>(`${this.ROOT_URL_USERS}/${id}`)
  }
  isAuthenticated(){
    return true
  }
}
