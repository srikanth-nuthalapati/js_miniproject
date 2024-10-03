
let table = document.querySelector("table");
let img = document.getElementById("hide");
let bal = document.querySelector("span");
let tbody = document.querySelector("tbody");

bal.value = 0;

let count = 0;
let add = document.getElementById("add");
add.addEventListener("click", (Event) => {

    img.style.display = "none";

    count++;

    let des = document.getElementById("des").value;
    let amt = document.getElementById("amount").value;
    let type = document.getElementById("type").value;

    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("button");
    td4.innerText = "Delete";
    td4.style.padding = "5px";
    td4.style.backgroundColor = "red";
    td4.style.marginLeft = "10px";


    td1.innerText = des;
    td2.innerText = amt;
    td3.innerText = type;

    tr.append(td1,td2,td3,td4);

    tbody.appendChild(tr);

    table.appendChild(tbody);


    if(type=="income"){
        bal.value = parseInt(bal.value) + parseInt(amt);
    }
    else{
        bal.value = parseInt(bal.value) - parseInt(amt);
    }

    bal.innerText = '$ ' +  bal.value;

    td4.addEventListener("click", (Event) => {
        let row = Event.target.parentNode;
        row.remove();
        count--;
        if(count==0){
            img.style.display = "block";
        }

        if(type=="income"){
            bal.value = parseInt(bal.value) - parseInt(amt);
        }
        else{
            bal.value = parseInt(bal.value) + parseInt(amt);
        }
    
        bal.innerText = '$ ' +  bal.value;
    });

    document.getElementById('des').value = '';
    document.getElementById('amt').value = '';

})