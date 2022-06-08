import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  myCourse = ""

  courses = ["Laravel", "Django", "Spring boot", "React"]

  addCourse() {
    console.log(this.myCourse)
    this.courses = [this.myCourse, ...this.courses]
    this.myCourse = ""
  }

 
  deleteCourse(course:any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this course !",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {

        this.courses = this.courses.filter(function(data){
          return data !== course
        })

        Swal.fire(
          'Deleted!',
          'Your Course has been deleted.',
          'success'
        )
      }
    })



   

    // let index = this.courses.indexOf(course)
    // this.courses.splice(index, 1)
  }

}
