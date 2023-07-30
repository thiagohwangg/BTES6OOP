import Person from "./Person.js";
class Customers extends Person {
    constructor(name,address,maND,email,type,_nameCompany,_bill,_comment){
        super(name,address,maND,email,type)
        this.nameCompany = _nameCompany
        this.bill = _bill
        this.comment = _comment
    }
}
export default Customers