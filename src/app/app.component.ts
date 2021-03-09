import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'architettura-software';

  arrayone (n:number):any [] {return Array(n)}

  /*saveStud(){
    let url:string="/delete/"+this.invoiceDetail.id;
    let observer=this.httpService.retrieveDeleteCall<string>(url).subscribe(response=>{
      this.updateUser();
      observer.unsubscribe();
    });
  }*/
}
