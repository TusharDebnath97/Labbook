import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClickAdd(data)
  {
    alert("ID="+data.empId+" Name="+data.nam+" Salary="+data.sal+" Department="+data.dept);
  }
  
}
