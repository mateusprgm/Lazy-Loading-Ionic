import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { GithubDataService } from '../services/github-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;

  items = [];
  obsData: Observable<any>;
  page = 1;
  per_page = 5;


  constructor(
    private githubData: GithubDataService,
    private toastCtrl: ToastController
    ) {
    this.addMoreItems();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      event.target.complete();
    }, 300);
  }

  addMoreItems() {
    this.githubData.getData(this.page, this.per_page).subscribe((data)=>{
      let itemslength = this.items.length;

      for (let index = 0; index < 10; index++) {
        if(data[index]){
          this.items.push(data[index]);
        }
      }
      if(this.items.length == itemslength){
        this.showToast("No more Items");
      }
    }, (error)=>{
      alert(error);
    })

    console.log(this.items)
    this.page++;
  }

  async showToast(msg){
    let toast = await this.toastCtrl.create({
      message:msg,
      position: 'bottom',
      duration: 2000
    })
    toast.present();
  }
}
