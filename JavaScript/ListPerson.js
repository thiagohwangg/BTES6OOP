import Person from "./Person.js";
import Students from "./Students.js";
import Employee from "./Employee.js";
import Customer from "./Customer.js";
const getElement = (selector) => document.querySelector(selector)


class ListPerson {
    constructor() {
        this.arrStudents = []
        this.arrEmployee = []
        this.arrCustomer = []
        this.arrTotal = []
    }
    // Thêm người dùng
    addPerson(select, person) {
        if (select === "Student") {
            this.arrStudents.push(person)
        } else if (select === "Employee") {
            this.arrEmployee.push(person)
        } else if (select === "Customer") {
            this.arrCustomer.push(person)
        }
    }
    // Xử lý tìm người dùng
    findPerson(arr, maND) {
        const index = arr.findIndex((a) => {
           return a.maND === maND
        })        
    }
    // Xử lý xoá người dùng
    deletePerson(arr, maND) {
        const index = this.findPerson(arr, maND)
        if (index !== -1) {
            arr.splice(index, 1)
        } else {
            alert("Vui lòng nhập lại mã người dùng")
        }
    }
}

export default ListPerson