getElement = (selector) => document.querySelector(selector)
// Validation Account
function vlMaND(maND, idThongbao){
    maND = maND.replace(/\s/g, "")
    const regexSalary = new RegExp(/^[0-9]+$/)
    if (maND === "") {
        getElement(idThongbao).innerHTML = "Mã người dùng không được bỏ trống"
        return false
    }else if(maND < 0) {
        getElement(idThongbao).innerHTML = "Mã người dùng phải là số dương"
    }else if(regexSalary.test(maND) === false){
        getElement(idThongbao).innerHTML = "Mã người dùng phải là kí tự số"
    }else if (maND.trim().length > 6) {
        getElement(idThongbao).innerHTML = "Mã người dùng không được lớn hơn 6 kí tự"
        return false
    } else {
        getElement(idThongbao).innerHTML = ""
        return true
    }
}
// Validation address
function vlAddress(address, idThongbao){
    address = address.replace(/\s/g, "")
    if (address === "") {
        getElement(idThongbao).innerHTML = "Địa chỉ không được bỏ trống"
        return false
    } else {
        getElement(idThongbao).innerHTML = ""
        return true
    }
}
// Validation name 
function vlName(name, idThongbao) {
    const regexLetter = new RegExp(/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]*)*$/gm);
    name = name.toUpperCase().trim()
    if (name === "") {
        getElement(idThongbao).innerHTML = "Name không được bỏ trống"
        return false
    } else if (regexLetter.test(name) === false) {
        getElement(idThongbao).innerHTML = "Name không được chứa kí tự số"
        return false
    } else {
        getElement(idThongbao).innerHTML = ""
        return true
    }
}

// Validation email
function vlEmail(email, idThongbao) {
    const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (email === "") {
        getElement(idThongbao).innerHTML = "Email không được bỏ trống"
        return false
    } else if (regexEmail.test(email) === false) {
        getElement(idThongbao).innerHTML = "Email không đúng"
        return false
    } else {
        getElement(idThongbao).innerHTML= ""
        return true
    }
}
// Validation password
function vlPassword(password, idThongbao) {
    const regexPassword = new RegExp(/^(?=.{6,10})(?=.*[a-z]+)(?=.*\d+)(?=.*[A-Z]+)(?=.*[^\w])[ -~]+$/)
    if (password === "") {
        getElement(idThongbao).innerHTML = "Passwork không được bỏ trống"
        getElement(idThongbao).style.display = "inline-block"
        return false
    } else if (regexPassword.test(password) === false) {
        getElement(idThongbao).innerHTML = "Passwork từ 6-10 kí tự và chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
        getElement(idThongbao).style.display = "inline-block"
        return false
    } else {
        getElement(idThongbao).style.display = "none"
        return true
    }
}
// Validation day
function vlDay(dayWork, idThongbao) {
    const regexDay = new RegExp(/(?:(?:(?:0[1-9]|1[0-2])\/(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])\/(?:29|30)|(?:0[13578]|1[02])\/31)\/[1-9]\d{3}|02\/29(?:\/[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00))/)
    if (regexDay.test(dayWork) === false) {
        getElement(idThongbao).innerHTML = "Định dạng ngày không đúng"
        getElement(idThongbao).style.display = "inline-block"
        return false
    } else if (dayWork === "") {
        getElement(idThongbao).innerHTML = "Ngày tháng không được bỏ trống"
        getElement(idThongbao).style.display = "inline-block"
        return false
    } else {
        getElement(idThongbao).style.display = "none"
        return true
    }
}
// Validation Điểm
function vlNumber(number,diem, idThongbao) {
    const regexnumber = new RegExp(/^[0-9]+$/)
    if(number === ""){
        getElement(idThongbao).innerHTML = "Vui lòng nhập điểm số"
        return false
    } else if (diem < 0 || diem > 10) {
        getElement(idThongbao).innerHTML = "Điểm số chỉ trong khoảng từ 0-10"
        return false
    } 
    
    else {
        getElement(idThongbao).innerHTML = ""
        return true
    }
}
// Validation Lương
function vlSalary(a,number, idThongbao) {
    const regexnumber = new RegExp(/^[0-9]+$/)
    if(a === ""){
        getElement(idThongbao).innerHTML = "Vui lòng không được để trống"
        return false
    } else if (number < 0) {
        getElement(idThongbao).innerHTML = "Vui lòng nhập số dương"
        return false
    } 
    
    else {
        getElement(idThongbao).innerHTML = ""
        return true
    }
}
// Check rỗng
const checkEmpty = (a,idthongbao) => {
    if (a === ""){
        getElement(idthongbao).innerHTML = "Vui lòng không được để trống"
        return false
    } else {
        getElement(idthongbao).innerHTML = ""
        return true
    }
}
// Check Tài khoản
function checkMaND(maND, dsnd, selector, messErr, isEdit) {
    if (isEdit) return true
    // debugger
    let isFlag = false
    for (let i = 0; i < dsnd.length; i++) {
        if (dsnd[i].maND === maND) {
            isFlag = true
            break
        }
    }
    if (isFlag === true) {
        getElement(selector).innerHTML = messErr
        return false
    } else {
        getElement(selector).innetHTML = ""
        return true
    }
}
