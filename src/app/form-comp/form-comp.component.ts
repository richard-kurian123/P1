import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.scss']
})
export class FormCompComponent implements OnInit {

  constructor(private dataService:DataService, private fb:FormBuilder ) { }

  public dataArray:any=[];

  public type:any=[];

  public dataForm!:FormGroup;

  ngOnInit(): void {

    this.dataService.getData().subscribe((data)=>{

      // this.dataArray=data[0];

      this.dataArray.push(data[0])
      this.type.push(data[0].fields.types_of_reverse_mortgage)
      
      console.log(data);
      console.log("first item only",this.dataArray)
      console.log('type',this.type)

     this.creatingFormControl();


      this.dataForm = this.fb.group({

      })


    })




  }


    creatingFormControl(){
    this.type.forEach((element:any)=>{
    element.options.forEach((a:any)=>{
    this.dataForm.addControl(
    a.value, new FormControl('')
  )

})
    })




//reviced version

    // this.type.options.forEach((element:any)=>{
    //   this.dataForm.addControl(
    //     element.value, new FormControl('')
    //   )
    // })
    console.log(this.dataForm);
  }



}
