export class Todo {
    //  id: number;
      title: string = '';
      complete: boolean = false;


     //new needed data model

     id: number;
     name:string;
     username:string;
     email:any;
     phone:number;
     website:any;

    
    // "address": {
    //   "street": "Kulas Light",
    //   "suite": "Apt. 556",
    //   "city": "Gwenborough",
    //   "zipcode": "92998-3874",
    //   "geo": {
    //     "lat": "-37.3159",
    //     "lng": "81.1496"
    //   }
   // },
   
    // "company": {
    //   "name": "Romaguera-Crona",
    //   "catchPhrase": "Multi-layered client-server neural-net",
    //   "bs": "harness real-time e-markets"
    // }
  



  

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
