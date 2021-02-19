import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../../models/topic/TopicTemplate';
import {LearningCard} from '../../models/card-box/LearningCard';

@Injectable({
  providedIn: 'root'
})
export class SelectTopicService {

  private ROOT_URL_TOPICS= " http://localhost:3000/topics";
  private ROOT_URL_CARDS= "http://localhost:3000/chapters";
  private ROOT_URL_USERS="http://localhost:3000/users"


  constructor(private httpClient:HttpClient) { }

  getTopicFromHttp(id:string){
    return this.httpClient.get<Topic[]>(`${this.ROOT_URL_TOPICS}/${id}`);
  }
  getAllCardsFromHttp(topic:string){
    return this.httpClient.get<LearningCard[]>(`${this.ROOT_URL_CARDS}/${topic}`);
  }
  editCard(topic:string,card:LearningCard){
    return this.httpClient.put<LearningCard>(`${this.ROOT_URL_CARDS}/${topic}`[1],card);
  }
  addCard(topic:string,card:LearningCard){
    return this.httpClient.post<LearningCard>(`${this.ROOT_URL_CARDS}/${topic}`,card);
  }
  removeCard(topic:string,id:number){
    return this.httpClient.delete<LearningCard>(`${this.ROOT_URL_CARDS}/${topic}/${id}`)
  }
}
