const name1 = document.querySelector(".name");
const lastname = document.querySelector(".lastname");
const age = document.querySelector(".age");
const addBtn = document.querySelector(".add");
const table = document.querySelector(".table");
const datalist = {
    name: "",
    surname: "",
    age: ""
};
addBtn.addEventListener("click", () => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerText = name1.value;
    td2.innerText = lastname.value;
    td3.innerText = age.value;
 
        if (name1.value.trim() && lastname.value.trim() && age.value.trim()) {
            table.appendChild(tr);
            tr.append(td1, td2, td3);
        
        datalist.name = name1.value.trim();
        datalist.surname = lastname.value.trim();
        datalist.age = age.value.trim();
        }
    
    console.log(datalist);
  
});