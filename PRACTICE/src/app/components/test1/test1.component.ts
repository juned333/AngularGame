import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
//   form:any;


 
  username!:any 
  password!:any
  router: any;
 
  constructor() { }
  
  ngOnInit() {
    
  }

  login(){
    // if(this.username == 'syedjuned' && this.password == 'juned333')
    console.log('name:',this.username)
    console.log('password:',this.password)
    // this.router.navigate('/nextpage');
  }
}
 

