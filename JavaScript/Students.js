import Person from "./Person.js";

class Students extends Person{
    constructor(name,address,maND,email,type,_toan,_ly,_hoa){
        super(name,address,maND,email,type)
        this.toan = _toan
        this.ly = _ly
        this.hoa = _hoa
    }
    tinhDTB(){
        return (Number(this.toan)+Number(this.ly)+Number(this.hoa))/3
    }
}

export default Students