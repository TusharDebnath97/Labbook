import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id;
  name;
  salary;
  department;

  items = [{empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
  {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
  {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
  {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
  {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
  {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
  {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
  {empId:1008,empName:'Neelima',empSal:81000,empDep:'TESTING',empjoiningdate:'6/17/2015'},
  {empId:1009,empName:'Daya',empSal:1000,empDep:'TESTING',empjoiningdate:'6/17/2016'}];

  sortByID()
  {
    for(var i=0;i<this.items.length-1;i++)
    {
      for(var j=i+1;j<this.items.length;j++)
      {
        if(this.items[i].empId > this.items[j].empId)
        {
          var temp;
          temp=this.items[i];
          this.items[i]=this.items[j];
          this.items[j]=temp;
        }
      }
    }
  }
  
  sortByName()
  {
    for(var i=0;i<this.items.length-1;i++)
    {
      for(var j=i+1;j<this.items.length;j++)
      {
        if(this.items[i].empName > this.items[j].empName)
        {
          var temp;
          temp=this.items[i];
          this.items[i]=this.items[j];
          this.items[j]=temp;
        }
      }
    }
  }

  sortBySal()
  {
    for(var i=0;i<this.items.length-1;i++)
    {
      for(var j=i+1;j<this.items.length;j++)
      {
        if(this.items[i].empSal > this.items[j].empSal)
        {
          var temp;
          temp=this.items[i];
          this.items[i]=this.items[j];
          this.items[j]=temp;
        }
      }
    }
  }

  sortByDep()
  {
    for(var i=0;i<this.items.length-1;i++)
    {
      for(var j=i+1;j<this.items.length;j++)
      {
        if(this.items[i].empDep > this.items[j].empDep)
        {
          var temp;
          temp=this.items[i];
          this.items[i]=this.items[j];
          this.items[j]=temp;
        }
      }
    }
  }
}