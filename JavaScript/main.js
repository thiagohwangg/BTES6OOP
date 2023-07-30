import Person from "./Person.js";
import Students from "./Students.js";
import Employee from "./Employee.js";
import Customer from "./Customer.js";
import ListPerson from "./ListPerson.js";
const getElement = (selector) => document.querySelector(selector)
const listPerson = new ListPerson()

const clearInput = () => {
    const select = getElement("#select").value
    if (select === "Student") {
        getElement("#maND").value = ""
        getElement("#name").value = ""
        getElement("#address").value = ""
        getElement("#email").value = ""
        getElement("#diemToan").value = ""
        getElement("#diemLy").value = ""
        getElement("#diemHoa").value = ""
    } else if (select === "Employee") {
        getElement("#maND").value = ""
        getElement("#name").value = ""
        getElement("#address").value = ""
        getElement("#email").value = ""
        getElement("#dayWork").value = ""
        getElement("#salaryDay").value = ""
    } else if (select === "Customer") {
        getElement("#maND").value = ""
        getElement("#name").value = ""
        getElement("#address").value = ""
        getElement("#email").value = ""
        getElement("#nameCompany").value = ""
        getElement("#bill").value = ""
        getElement("#comment").value = ""
    }
}
// Render table + form
const renderTable = () => {
    getElement("#tbody").innerHTML = ""

    const select = getElement("#select").value
    if (select === "") {
        getElement("#sort").value = ""
        const td = `
            <td>Mã người dùng</td>
            <td>Tên</td>
            <td>Địa chỉ</td>
            <td>Email</td>
            <td>Loại người dùng</td>
        `
        getElement("#tdHead").innerHTML = td
        getElement("#form").innerHTML = "Vui lòng chọn đối tượng"
        getElement("#tbody").innerHTML = ""
        let sort = listPerson.arrTotal.sort((a,b)=> Number(a.maND) - Number(b.maND) )
            renderPerson(sort)
        
    } else if (select === "Student") {
        getElement("#sort").value = ""
        getElement("#btnDTB").style.display = "inline-block"
        getElement("#salary").style.display = "none"
        const td = `
            <td>Mã người dùng</td>
            <td>Tên</td>
            <td>Địa chỉ</td>
            <td>Email</td>
            <td>Toán</td>
            <td>Lý</td>
            <td>Hoá</td>
        `
        const form = `
        <div class="mb-3">
            <label for="maND" class="form-label">Mã người dùng</label>
            <input type="text" class="form-control" id="maND">
            <span style="color:red" id="tbmaND"></span>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Tên</label>
            <input  type="text" class="form-control" id="name">
            <span style="color:red" id="tbName"></span>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="address">
            <span style="color:red" id="tbAddress"></span>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <span style="color:red" id="tbEmail"></span>
        </div>
        <div class="mb-3">
            <label for="diemToan" class="form-label">Điểm Toán</label>
            <input type="number" class="form-control" id="diemToan">
            <span style="color:red" id="tbToan"></span>
        </div>
        <div class="mb-3">
            <label for="diemLy" class="form-label">Điểm Lý</label>
            <input type="number" class="form-control" id="diemLy">
            <span style="color:red" id="tbLy"></span>
        </div>
        <div class="mb-3">
            <label for="diemHoa" class="form-label">Điểm Hoá</label>
            <input type="number" class="form-control" id="diemHoa">
            <span style="color:red" id="tbHoa"></span>
        </div>
        <div id="DTB" class="mb-3" style="display:none">
            <label for="diemTB" class="form-label">Điểm Trung Bình</label>
            <input type="number" class="form-control" id="diemTB">
        </div>
        `
        getElement("#tdHead").innerHTML = td
        getElement("#form").innerHTML = form
        getElement("#tbody").innerHTML = ""
        renderPerson(listPerson.arrStudents)
    } else if (select === "Employee") {
        getElement("#sort").value = ""
        getElement("#btnDTB").style.display = "none"
        getElement("#salary").style.display = "inline-block"
        const td = `
            <td>Mã người dùng</td>
            <td>Tên</td>
            <td>Địa chỉ</td>
            <td>Email</td>
            <td>Ngày làm việc</td>
            <td>Lương theo ngày</td>
        `
        const form = `
        <div class="mb-3">
            <label for="maND" class="form-label">Mã người dùng</label>
            <input type="text" class="form-control" id="maND">
            <span style="color:red" id="tbmaND"></span>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Tên</label>
            <input  type="text" class="form-control" id="name">
            <span style="color:red" id="tbName"></span>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="address">
            <span style="color:red" id="tbAddress"></span>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <span style="color:red" id="tbEmail"></span>
        </div>
        <div class="mb-3">
            <label for="dayWork" class="form-label">Ngày làm việc</label>
            <input type="number" class="form-control" id="dayWork">
            <span style="color:red" id="tbDayWork"></span>
        </div>
        <div class="mb-3">
            <label for="salaryDay" class="form-label">Lương Theo Ngày</label>
            <input type="number" class="form-control" id="salaryDay">
            <span style="color:red" id="tbSalaryDay"></span>
        </div>
        <div id="tongLuong" class="mb-3" style="display: none">
            <label for="totalSalary" class="form-label">Tổng lương</label>
            <input type="text" class="form-control" id="totalSalary">
        </div>`
        getElement("#tdHead").innerHTML = td
        getElement("#form").innerHTML = form
        getElement("#tbody").innerHTML = ""
        renderPerson(listPerson.arrEmployee)
    } else if (select === "Customer") {
        getElement("#sort").value = ""
        getElement("#btnDTB").style.display = "none"
        getElement("#salary").style.display = "none"
        const td = `
            <td>Mã người dùng</td>
            <td>Tên</td>
            <td>Địa chỉ</td>
            <td>Email</td>
            <td>Tên công ty</td>
            <td>Trị giá hoá đơn</td>
            <td>Đánh giá</td>
        `
        const form = `
        <div class="mb-3">
            <label for="maND" class="form-label">Mã người dùng</label>
            <input type="text" class="form-control" id="maND">
            <span style="color:red" id="tbmaND"></span>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Tên</label>
            <input  type="text" class="form-control" id="name">
            <span style="color:red" id="tbName"></span>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="address">
            <span style="color:red" id="tbAddress"></span>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <span style="color:red" id="tbEmail"></span>
        </div>
        <div class="mb-3">
            <label for="nameCompany" class="form-label">Tên công ty</label>
            <input type="text" class="form-control" id="nameCompany">
            <span style="color:red" id="tbNameCompany"></span>
        </div>
        <div class="mb-3">
            <label for="bill" class="form-label">Trị giá hoá đơn</label>
            <input type="text" class="form-control" id="bill">
            <span style="color:red" id="tbBill"></span>
        </div>
        <div class="mb-3">
            <label for="comment" class="form-label">Đánh giá</label>
            <input type="text" class="form-control" id="comment">
            <span style="color:red" id="tbComment"></span>
        </div>`
        getElement("#tdHead").innerHTML = td
        getElement("#form").innerHTML = form
        getElement("#tbody").innerHTML = ""
        renderPerson(listPerson.arrCustomer)
    }
}
getElement("#select").onchange = renderTable

// Lấy thông tin người dùng
const getInfo = (isEdit) => {
    let isValid = true
    const select = getElement("#select").value
    const maND = getElement("#maND").value
    const name = getElement("#name").value
    const address = getElement("#address").value
    const email = getElement("#email").value
    if (select === "Student") {
        const diemToan = getElement("#diemToan").value * 1
        const diemHoa = getElement("#diemHoa").value * 1
        const diemLy = getElement("#diemLy").value * 1
        const a = getElement("#diemToan").value
        const b = getElement("#diemHoa").value
        const c = getElement("#diemLy").value
        const person = new Students(name, address, maND, email, "Student", diemToan, diemLy, diemHoa)
        isValid &= vlMaND(person.maND, "#tbmaND") && checkMaND(person.maND, listPerson.arrTotal, "#tbmaND", "Mã người dùng đã tồn tại",isEdit)
        isValid &= vlName(person.name, "#tbName")
        isValid &= vlAddress(person.address, "#tbAddress")
        isValid &= vlEmail(person.email, "#tbEmail")
        isValid &= vlNumber(a, diemToan, "#tbToan")
        isValid &= vlNumber(b, diemLy, "#tbLy")
        isValid &= vlNumber(c, diemHoa, "#tbHoa")
        return isValid ? person : undefined
    } else if (select === "Employee") {
        const dayWork = getElement("#dayWork").value * 1
        const a = getElement("#dayWork").value
        const b = getElement("#salaryDay").value
        const salaryDay = getElement("#salaryDay").value * 1
        const person = new Employee(name, address, maND, email, "Employee", dayWork, salaryDay)
        isValid &= vlMaND(person.maND, "#tbmaND") && checkMaND(person.maND, listPerson.arrTotal, "#tbmaND", "Mã người dùng đã tồn tại",isEdit)
        isValid &= vlName(person.name, "#tbName")
        isValid &= vlAddress(person.address, "#tbAddress")
        isValid &= vlEmail(person.email, "#tbEmail")
        isValid &= vlSalary(a, person.dayWork, "#tbDayWork")
        isValid &= vlSalary(b, person.salaryDay, "#tbSalaryDay")
        return isValid ? person : undefined
    } else if (select === "Customer") {
        const nameCompany = getElement("#nameCompany").value
        const bill = getElement("#bill").value
        const comment = getElement("#comment").value
        const person = new Customer(name, address, maND, email, "Customer", nameCompany, bill, comment)
        isValid &= vlMaND(person.maND, "#tbmaND") && checkMaND(person.maND, listPerson.arrTotal, "#tbmaND", "Mã người dùng đã tồn tại",isEdit)
        isValid &= vlName(person.name, "#tbName")
        isValid &= vlAddress(person.address, "#tbAddress")
        isValid &= vlEmail(person.email, "#tbEmail")
        isValid &= checkEmpty(person.nameCompany, "#tbNameCompany")
        isValid &= checkEmpty(person.bill, "#tbBill")
        isValid &= checkEmpty(person.comment, "#tbComment")
        return isValid ? person : undefined
    }
    // Check validation
}
// Render ra màn hình 
const renderPerson = (arr) => {
    const select = getElement("#select").value
    // if (arr.length > 0) {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i]
        if (select === "") {
            content += `
                <tr>
                <td>${person.maND}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.type}</td>
                </tr>
                `
        } else if (select === "Student") {
            content += `
                <tr>
                <td>${person.maND}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.toan}</td>
                <td>${person.ly}</td>
                <td>${person.hoa}</td>
                <td>
                <button class = "bg btn btn-success" onclick="editND('${person.maND}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                <button class = "bg btn btn-danger" onclick="xoaND('${person.maND}')">Delete</button>
                </td>
                </tr>
                `
        } else if (select === "Employee") {
            content += `
                <tr>
                <td>${person.maND}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.dayWork}</td>
                <td>${person.salaryDay}</td>
                <td>
                <button class = "bg btn btn-success" onclick="editND('${person.maND}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                <button class = "bg btn btn-danger" onclick="xoaND('${person.maND}')">Delete</button>
                </td>
                </tr>
                `
        } else if (select === "Customer") {
            content += `
                <tr>
                <td>${person.maND}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.nameCompany}</td>
                <td>${person.bill}</td>
                <td>${person.comment}</td>
                <td>
                <button class = "bg btn btn-success" onclick="editND('${person.maND}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                <button class = "bg btn btn-danger" onclick="xoaND('${person.maND}')">Delete</button>
                </td>
                </tr>
                `
        }
    }

    getElement("#tbody").innerHTML = content
}
// Chỉnh nút button
getElement("#btnThem").onclick = () => {
    const select = getElement("#select").value
    getElement("#btnEdit").style.display = "none"
    getElement("#btnAdd").style.display = "inline-block"
    getElement("#btnDTB").style.display = "none"
    getElement("#salary").style.display = "none"
    if(select === ""){
     getElement("#btnAdd").style.display = "none"
    }else if (select === "Student") {
        getElement("#DTB").style.display = "none"
    } else if (select === "Employee") {
        getElement("#tongLuong").style.display = "none"
    }
    clearInput()
}
//Thêm Person
getElement("#btnAdd").onclick = () => {
    const select = getElement("#select").value
    const person = getInfo(false)
    if (person) {
        listPerson.arrTotal.push(person)
        if (select === "Student") {
            listPerson.addPerson(select, person)
            setLocal(listPerson.arrStudents, "dshs")
            renderPerson(listPerson.arrStudents)
            return listPerson.arrStudents
        } else if (select === "Employee") {
            listPerson.addPerson(select, person)
            setLocal(listPerson.arrEmployee, "dsnv")
            renderPerson(listPerson.arrEmployee)
        } else if (select === "Customer") {
            listPerson.addPerson(select, person)
            setLocal(listPerson.arrCustomer, "dskh")
            renderPerson(listPerson.arrCustomer)
        }
    }
}
// Set Local
const setLocal = (arr, key) => {
    let data = JSON.stringify(arr)
    localStorage.setItem(key, data)
}
// Get Local
const getLocal = () => {
    const data = localStorage.getItem("dshs")
    const data2 = localStorage.getItem("dsnv")
    const data3 = localStorage.getItem("dskh")
    let parseData = JSON.parse(data)
    let parseData2 = JSON.parse(data2)
    let parseData3 = JSON.parse(data3)
    if (data) {
        for (let i = 0; i < parseData.length; i++) {
            let c = parseData[i]
            const d = new Students(c.name, c.address, c.maND, c.email, "Student", c.toan, c.ly, c.hoa)
            listPerson.arrStudents.push(d);
            listPerson.arrTotal.push(d)
        }
    }
    if (data2) {
        for (let i = 0; i < parseData2.length; i++) {
            let c = parseData2[i]
            const e = new Employee(c.name, c.address, c.maND, c.email, "Employee", c.dayWork, c.salaryDay)
            listPerson.arrEmployee.push(e)
            listPerson.arrTotal.push(e)
        }
    }
    if (data3) {
        for (let i = 0; i < parseData3.length; i++) {
            let c = parseData3[i]
            const f = new Customer(c.name, c.address, c.maND, c.email, "Customer", c.nameCompany, c.bill, c.comment)
            listPerson.arrCustomer.push(f)
            listPerson.arrTotal.push(f)
        }
    }

}
getLocal()
renderTable()
renderPerson(listPerson.arrTotal)
//Xoá người dùng
window.xoaND = (maND) => {
    const select = getElement("#select").value
    // Mảng total
    const index = listPerson.arrTotal.findIndex((v) => v.maND === maND)
    listPerson.arrTotal.splice(index, 1)
    // Mảng lẻ
    if (select === "Student") {
        listPerson.deletePerson(listPerson.arrStudents, maND)
        setLocal(listPerson.arrStudents, "dshs")
        console.log("abc");
        renderPerson(listPerson.arrStudents)
    } else if (select === "Employee") {
        listPerson.deletePerson(listPerson.arrEmployee, maND)
        setLocal(listPerson.arrEmployee, "dsnv")
        renderPerson(listPerson.arrEmployee)
    } else if (select === "Customer") {
        listPerson.deletePerson(listPerson.arrCustomer, maND)
        setLocal(listPerson.arrCustomer, "dskh")
        renderPerson(listPerson.arrCustomer)
    }
}
//Lấy thông tin người dùng để Edit
window.editND = (maND) => {
    clearSpan()
    getElement("#btnEdit").style.display = "inline-block"
    getElement("#btnAdd").style.display = "none"
    const select = getElement("#select").value
    if (select === "Student") {
        getElement("#DTB").style.display = "none"
        getElement("#btnDTB").style.display = "inline-block"
        const index = listPerson.arrStudents.findIndex((a) => a.maND === maND)
        const nd = listPerson.arrStudents[index]
        getElement("#maND").value = nd.maND
        getElement("#name").value = nd.name
        getElement("#address").value = nd.address
        getElement("#email").value = nd.email
        getElement("#diemToan").value = nd.toan
        getElement("#diemLy").value = nd.ly
        getElement("#diemHoa").value = nd.hoa
    } else if (select === "Employee") {
        getElement("#tongLuong").style.display = "none"
        getElement("#salary").style.display = "inline-block"
        const index = listPerson.arrEmployee.findIndex((a) => a.maND === maND)
        const nd = listPerson.arrEmployee[index]
        getElement("#maND").value = nd.maND
        getElement("#name").value = nd.name
        getElement("#address").value = nd.address
        getElement("#email").value = nd.email
        getElement("#dayWork").value = nd.dayWork
        getElement("#salaryDay").value = nd.salaryDay
    } else if (select === "Customer") {
        const index = listPerson.arrCustomer.findIndex((a) => a.maND === maND)
        const nd = listPerson.arrCustomer[index]
        getElement("#maND").value = nd.maND
        getElement("#name").value = nd.name
        getElement("#address").value = nd.address
        getElement("#email").value = nd.email
        getElement("#nameCompany").value = nd.nameCompany
        getElement("#bill").value = nd.bill
        getElement("#comment").value = nd.comment
    }
}
//Edit người dùng
getElement("#btnEdit").onclick = () => {
    const select = getElement("#select").value
    const person = getInfo(true)
    if(person === "undefined"){
        return false
    } else {
        const index1 = listPerson.arrTotal.findIndex((a) => a.maND === person.maND)
        listPerson.arrTotal[index1] = person
        if (select === "Student") {
            const index = listPerson.arrStudents.findIndex((a) => a.maND === person.maND)
            listPerson.arrStudents[index] = person
            setLocal(listPerson.arrStudents, "dshs")
            renderPerson(listPerson.arrStudents)
        } else if (select === "Employee") {
            const index = listPerson.arrEmployee.findIndex((a) => a.maND === person.maND)
            listPerson.arrEmployee[index] = person
            setLocal(listPerson.arrEmployee, "dsnv")
            renderPerson(listPerson.arrEmployee)
        } else if (select === "Customer") {
            const index = listPerson.arrCustomer.findIndex((a) => a.maND === person.maND)
            listPerson.arrCustomer[index] = person
            setLocal(listPerson.arrCustomer, "dskh")
            renderPerson(listPerson.arrCustomer)
        }
        getElement("#close").click()
    }
}
// Tính Điểm trung bình học sinh
getElement("#btnDTB").onclick = () => {
    getElement("#DTB").style.display = "inline-block"
    const person = getInfo(true)
    const dtb = person.tinhDTB()
    getElement("#diemTB").value = dtb
}
// Tính lương cho nhân viên
getElement("#salary").onclick = () => {
    getElement("#tongLuong").style.display = "inline-block"
    const person = getInfo(true)
    let salary = person.tinhLuong()
    salary = salary.toLocaleString()
    getElement("#totalSalary").value = salary
}
// Sort
let sort = ()=>{
    const select1 = getElement("#select").value
    const select = getElement("#sort").value
    if(select1 === ""){
        if(select === ""){
            let sort = listPerson.arrTotal.sort((a,b)=> Number(a.maND) - Number(b.maND) )
            renderPerson(sort)
            // renderPerson(listPerson.arrTotal)
        } else if(select === "sortName"){
            let sort = listPerson.arrTotal.sort((a,b)=> a.name.localeCompare(b.name) )
            renderPerson(sort)
        } else if(select === "sortName1"){
            let sort = listPerson.arrTotal.sort((a,b)=> b.name.localeCompare(a.name))
            renderPerson(sort)
        }
    } else if (select1 === "Student"){
        getElement("#sort").value = ""
        if(select === ""){
            renderPerson(listPerson.arrStudents)
        } else if(select === "sortName"){
            let sort = listPerson.arrStudents.sort((a,b)=> a.name.localeCompare(b.name) )
            renderPerson(sort)
        } else if(select === "sortName1"){
            let sort = listPerson.arrStudents.sort((a,b)=> b.name.localeCompare(a.name))
            renderPerson(sort)
        }
    } else if (select1 === "Employee"){
        if(select === ""){
            renderPerson(listPerson.arrEmployee)
        } else if(select === "sortName"){
            let sort = listPerson.arrEmployee.sort((a,b)=> a.name.localeCompare(b.name) )
            renderPerson(sort)
        } else if(select === "sortName1"){
            let sort = listPerson.arrEmployee.sort((a,b)=> b.name.localeCompare(a.name))
            renderPerson(sort)
        }
    } else if (select1 === "Customer"){
        if(select === ""){
            renderPerson(listPerson.arrCustomer)
        } else if(select === "sortName"){
            let sort = listPerson.arrCustomer.sort((a,b)=> a.name.localeCompare(b.name) )
            renderPerson(sort)
        } else if(select === "sortName1"){
            let sort = listPerson.arrCustomer.sort((a,b)=> b.name.localeCompare(a.name))
            renderPerson(sort)
        }
    }
}
getElement("#sort").onchange = sort
// Clear span
function clearSpan() {
    const select = getElement("#select").value
    getElement("#tbmaND").innerHTML = ""
    getElement("#tbName").innerHTML = ""
    getElement("#tbAddress").innerHTML = ""
    getElement("#tbEmail").innerHTML = ""
    if (select === "Student") {
        getElement("#tbToan").innerHTML = ""
        getElement("#tbLy").innerHTML = ""
        getElement("#tbHoa").innerHTML = ""
    } else if (select === "Employee") {
        getElement("#tbDayWork").innerHTML = ""
        getElement("#tbSalaryDay").innerHTML = ""
    } else if (select === "Customer") {
        getElement("#tbNameCompany").innerHTML = ""
        getElement("#tbBill").innerHTML = ""
        getElement("#tbComment").innerHTML = ""
    }
}
