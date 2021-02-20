
export interface LearningCard {

  id:number,
  key:string,

  question:string,
  answer:string,

  userId?:string,
  correctAnswerCount:number
}
