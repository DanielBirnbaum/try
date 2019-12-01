import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagingService } from '../../../services/paging.service';
import { BirdsService } from '../../../services/birds.service';
import { LivestockService } from '../../../services/livestock.service';
import { WildAnimalsService } from '../../../services/wild-animals.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(public page: PagingService, public myBird: BirdsService, public myLivestock: LivestockService, public myWild: WildAnimalsService) { }

  @Output() moveItem = new EventEmitter<number>()

  moveCardPage(move: number) {
    switch (this.page.panelName) {
      case 'birds':
        let newBirdIndex = this.getNewCuurentIndex(
          this.myBird.currentBirdIndex, move, this.myBird.birds)
        this.myBird.currentBirdIndex = newBirdIndex
        this.myBird.currentBird = this.myBird.birds[newBirdIndex]
        break;
        
        



      default:
        break;
    }


  }

  private getNewCuurentIndex(current: number, delta: number, array: {}[]): number {
    let max = array.length - 1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }



  ngOnInit() {
  }

}


