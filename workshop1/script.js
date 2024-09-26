
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



function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Extract the table headers dynamically from <th> elements
    var headers = [];
    document.querySelectorAll("#myTable th").forEach(function(th) {
        headers.push(th.innerText);
    });

    // Extract the table rows and filter out hidden content
    var tableRows = document.querySelectorAll("#myTable tbody tr:not(#hide)");

            if (tableRows.length === 0) {
                // If no real transactions, show 'No Transactions yet' in the PDF
                doc.text("No Transactions yet", 14, 20);
            } else {
                // Extract the table headers dynamically from <th> elements
                var headers = [];
                document.querySelectorAll("#myTable th").forEach(function(th) {
                    headers.push(th.innerText);
                });

                // Extract the table rows and filter out hidden content
                var rows = [];
                tableRows.forEach(function(tr) {
                    var rowData = [];
                    tr.querySelectorAll("td").forEach(function(td) {
                        var visibleContent = '';

                        // If the td has child elements, filter only visible ones
                        if (td.querySelectorAll("*").length > 0) {
                            td.querySelectorAll("*").forEach(function(el) {
                                if (window.getComputedStyle(el).display !== "none") {
                                    visibleContent += el.innerText + " ";
                                }
                            });
                        } else {
                            // If the td has no child elements, get the direct text content
                            visibleContent = td.innerText;
                        }

                        rowData.push(visibleContent.trim());
                    });
                    rows.push(rowData);
                });

                // Generate the table
                doc.autoTable({
                    head: [headers],
                    body: rows,
                });

    // Add balance at the bottom of the PDF
    doc.text(`Balance: ${bal.value}`, 14, doc.autoTable.previous.finalY + 10); // position after the table
            }

    // Save the generated PDF
    doc.save('table_with_balance.pdf');
 }