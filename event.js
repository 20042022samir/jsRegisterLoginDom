

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const passwordConfirm = document.getElementById("passwordConfirm");
const tableBody = document.querySelector("tbody");
const registerBtn = document.getElementById("registerBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const message_container = document.getElementsByClassName("message_container")[0];
const Thead=document.querySelector("thead");
const Myarr = [];
let counter=0;
registerBtn.addEventListener("click", () => {
    if (!emailInput.value.trim() ||
        !passwordInput.value.trim() ||
        !passwordConfirm.value.trim()) {
        alert("Please fill all the fields!");
        return;
    }
    if (passwordInput.value !== passwordConfirm.value) {
      const MesaageNotAccapted=document.createElement("tr");
      Thead.remove();
      if(counter==0){
        counter++;
        MesaageNotAccapted.textContent="not accapted!!";
        tableBody.append(MesaageNotAccapted);
        return;
      }
      if(counter!=0){
        return; 
      }
    }

    const user = { email: emailInput.value, password: passwordInput.value };
    Myarr.push(user);

    const newTrItem = document.createElement("tr");
    newTrItem.innerHTML = `
     <td>${emailInput.value}</td>
     <td>${passwordInput.value}</td>
   `;
    tableBody.append(newTrItem);
    emailInput.value = "";
    passwordInput.value = "";
    passwordConfirm.value = "";

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    newTrItem.append(deleteBtn)
    deleteBtn.addEventListener("click",()=>{
       newTrItem.remove();
       let findIndex=Myarr.findIndex(user2=>user2.email==user.email && user2.password==user.password);
      console.log(findIndex);
      Myarr.splice(findIndex,1);
    })
    
});
const message = document.getElementsByClassName("message")[0];

loginBtn.addEventListener("click", () => {
    let loggedIn = false;
    Myarr.forEach((element) => {
        if (
            element.email === loginEmail.value.trim() &&
            element.password === loginPassword.value.trim()
        ) {
            loggedIn = true;
        }
    });
    if (loggedIn) {
        message.textContent = "Logged In";
    } else {
        message.textContent = "Not Logged In";
    }
    message_container.append(message);
});

