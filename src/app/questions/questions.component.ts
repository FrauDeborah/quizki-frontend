import { Component, OnInit } from '@angular/core';
import {QuestionDataService} from "../questionData/question-data.service"
import {Question} from "./questionModel"
import {QuestionTypes} from "./question/question-types/questionTypesEnum"

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  question: Question;
  questionService: QuestionDataService;

  constructor( questionService: QuestionDataService) {

    this.questionService = questionService;

  }

  ngOnInit() {

    //initialize the question with a default type for now.
    this.question = this.questionService.getQuestionTypeData("single");
    this.questions = this.questionService.getQuestions();

  }

  public getQuestionTypesString(index: number){
    return QuestionTypes[index];
  }

}
