import { Component } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public empId;
  public nam;
  public sal;
  public dept;
  public up_empId;
  public up_nam;
  public up_sal;
  public up_dept;
  public arr=[ {"id":1001,"name":"Rahul","salary":9000,"department":"Java"},
                   {"id":1002,"name":"Sachin","salary":19000,"department":"OraApps"},
                   {"id":1003,"name":"Vikash","salary":29000,"department":"BI"}];
  onClickAdd(data)
  {
    this.empId=data.empId;
    this.nam=data.nam;
    this.sal=data.sal;
    this.dept=data.dept;
    this.arr.push({"id":this.empId,"name":this.nam,"salary":this.sal,"department":this.dept});
    document.getElementById("current").innerHTML="ID:"+this.empId+","+"Name:"+this.nam+","+"Salary:"+this.sal+","+"Department:"+this.dept+" inserted into table";
  }
  update(event)
  {
       var update_loc=event.target.parentNode.parentNode.children;
       this.up_empId=update_loc[0].textContent;
       this.up_nam=update_loc[1].textContent;
       this.up_sal=update_loc[2].textContent;
       this.up_dept=update_loc[3].textContent;
  }
  update_dataOnClick()
  {
    for(var i=0;i<this.arr.length;i++)
    {
      if(this.up_empId==this.arr[i].id)
      {
        this.arr[i].name=this.up_nam;
        this.arr[i].salary=this.up_sal;
        this.arr[i].department=this.up_dept;
      }
    }
  }

  delete(event)
  {
    var delete_loc_id=event.target.parentNode.parentNode.children[0].textContent;
    for(var i=0;i<this.arr.length;i++)
    {
       if(this.arr[i].id==delete_loc_id)
       {
             this.arr.splice(i,1);
             //break;
       }
    }
  }
}