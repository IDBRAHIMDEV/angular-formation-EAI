import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  new = false
  edit = false
  etat = 'list'

  toggleEtat(etat: string) {
    this.etat = etat
  }

  editCourse(course: any) {
    this.course = course
    this.new = true
    this.edit = true
  }


  updateCourse() {
    this.new = false
    this.edit = false

    this.initCourse()
  }


  toggleForm() {
    this.new = !this.new
    this.edit = false
    this.initCourse()
  }


  deleteCourse(course: any) {

    if(!confirm(`Are you sure to delete this Course : ${course.title}`)) {
      return
    }

    this.courses = this.courses.filter(data => data.id !== course.id)

  }

  course = {
    id: "",
    title: "",
    content: "",
    price: 0,
    image: ""
  }

  courses = [
    {id: '1', title: "Learn Angular", price: 20, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, itaque!", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/cca285a18117487ba701db121230c4e1/5ef2e70506b54ecd9f53dbff991d91a1"},
    {id: '2', title: "Learn Php", price: 50, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, itaque!", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/f614ea6e9cee4d3f9997e3e5ccae12e1/4ba34299f88c4251a1e457f6aab78e69"},
    {id: '3', title: "Learn CSharp", price: 30, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, itaque!", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BCxxBl0JT0Ca87Z4hpNi"},
    {id: '4', title: "Learn React", price: 80, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, itaque!", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/a7ec1b20ff814946a9e7096aaa2ad3e1/93f2bb33ff854b5998594b3fe2d9c96a"},
    {id: '5', title: "Learn Python", price: 70, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, itaque!", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/315ce4a97fc04f4b9565ab2d0e9a00e1/187e1fe69ae84eada3b213cf2b632514"},
    {id: '6', title: "Learn Djqngo", price: 200, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, itaque!", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/1a87c398761d4629a38126a31a8d93e1/eaa52d6815e44538bcc1068aca541ab7"},
  ]

  addCourse() {

    this.course = {
      ...this.course,
      id: uuidv4()
    }

    this.courses = [this.course, ...this.courses]

    this.initCourse()
  }


  initCourse() {
    this.course = {
      id: "",
      title: "",
      content: "",
      price: 0,
      image: ""
    }
  }

}
