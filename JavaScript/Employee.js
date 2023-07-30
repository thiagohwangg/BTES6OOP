import Person from "./Person.js";

class Employees extends Person{
    constructor(name,address,maND,email,type,_dayWork,_salaryDay){
        super(name,address,maND,email,type)
        this.dayWork = _dayWork
        this.salaryDay = _salaryDay
    }
    tinhLuong(){
        return(this.dayWork*this.salaryDay)
    }
}

export default Employees