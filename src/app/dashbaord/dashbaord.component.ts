import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {


  userList=[]
  public data = [
    {
      name: "abc",
      id: 1,
      type: {
        typeof: "cars"
      }
    },
    {
      name: "def",
      id: 2,
      type: {
        typeof: "cars"
      }
    },
    {
      name: "ghi",
      id: 3,
      type: {
        typeof: "planes"
      }
    },
    {
      name: "jkl",
      id: 4,
      type: {
        typeof: "boats"
      }
    },
    {
      name: "mno",
      id: 5,
      type: {
        typeof: "rockets"
      }
    },
  ];

  result: any = null;
 
  constructor(public testService:TestService) {
    console.log("costructor called");

    this.filterData();
    // this.findData();
    // this.spliceData();

    // this.forLoop()
  } 

  ngOnInit(): void {
    this.testService.getAllUsers().subscribe(data =>{
      console.log(data);

      this.userList= data;
    } , error =>{
      console.log(error);
      
    })
  }

  filterData() {
    this.result = this.data.filter(f => f.type.typeof == "cars");
  }

  findData() {
    this.result = this.data.find(f => f.id == 3);
  }

  sliceData() {
    this.result = this.data.slice(0, 3);
  }

  spliceData() {
    this.result = this.data.splice(0, 2);
  }

  forLoop() {

    console.log("--> basic loop")
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i])
    }



    console.log("--> for each")
    this.data.forEach(f => {
      console.log(f)
    })

    console.log("--> for of")
    for (let i of this.data) {
      // console.log(i)
      for (let j in i) {
        console.log(j)
      }

    }

  }

}
