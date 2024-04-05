import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-application-tracker',
  templateUrl: './application-tracker.component.html',
  styleUrls: ['./application-tracker.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('500ms ease-in-out')),
    ]),
  ]
})
export class ApplicationTrackerComponent implements OnInit, AfterViewInit {

  @ViewChildren('greenParts')
  greenParts!: QueryList<ElementRef>;
  
  constructor() { 
  }

  items = [
    {
      statusName:"Applied",
      date:"27 Jan 24",
      status:"completed",
      isLast:false
    },
    {
      statusName:"Application sent",
      date:"27 Jan 24",
      status:"completed",
      isLast:false
    },
    {
      statusName:"Application Viewed",
      date:"23 Feb 24",
      status:"pending",
      isLast:false
    },
    {
      statusName:"Resume Viewed",
      date:"23 Feb 24",
      status:"awating",
      isLast:true
    }
  ]

  ngOnInit(): void {
    // this.animate();
  }

  animate(){
    // Find all elements with the green-part class
    const greenParts = document.querySelectorAll('.green-part');
    console.log(greenParts);
    // Iterate over each green part and add animation delay
    greenParts.forEach((part:any, index) => {
      // if(this.items[index].status=='pending'){
      //   part.style.backgroundColor = '#fff'
      // }
      part.style.animationDelay = `${index * 0.5}s`;
    });
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.animate();
    })
  }

}
