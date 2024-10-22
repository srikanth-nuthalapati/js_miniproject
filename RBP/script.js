const bookTicket = document.querySelector("header #ticket-btn");
const pnrStatus = document.querySelector("header #pnr-btn");
const login =document.querySelector("header #Login");
const register = document.querySelector("header #sign-up");
const searchTrain = document.querySelector("header #search-train");

const bookContainer = document.querySelector(".container .book-ticket");
const pnrContainer = document.querySelector(".container .pnr-check");
const loginPage = document.querySelector(".container .login-page");
const registerPage = document.querySelector(".container .sign-up");
const TrainSearchPage = document.querySelector(".container .search-train");

const bookingbtn = document.querySelector(".book-ticket form button");
const pnrbtn = document.querySelector(".pnr-check form button");
const TrainSearchBtn = document.querySelector(".container .search-train button");
const newAcc = document.querySelector(".container .login-page a");
const oldAcc = document.querySelector(".container .sign-up a");
const signUpSuccessful = document.querySelector(".container .sign-up button");
const logInSuccessful = document.querySelector(".container .login-page button");

const ticketContainer = document.querySelector(".container .booking-details");
const currentPnrStatus = document.querySelector(".pnr-check .pnr-status");
let searchTrainResult = document.querySelector(".container .search-train #train-search-result");

let signUpName = document.querySelector(".container .sign-up .grp-1 #name");
let SignUpNumber = document.querySelector(".container .sign-up .grp-2 #phone");
let SignUpPassword = document.querySelector(".container .sign-up .grp-3 #password");

let LoginNumber = document.querySelector(".container .login-page .grp-1 #Phone");
let LoginPassword = document.querySelector(".container .login-page .grp-2 #Password");

let boardingStation = document.querySelector(".container .book-ticket #from");
let destinationStation = document.querySelector(".container .book-ticket #to");
let SelectedDate = document.querySelector(".container .book-ticket #date");
let SelectedClass = document.querySelector(".container .book-ticket #class");

let BookedTrainNo = document.querySelector(".container .booking-details .group-1 #booked-train-no");
let BookedTicketPnr = document.querySelector(".container .booking-details .group-1 #booked-pnr-no");
let BookedTicketTrain = document.querySelector(".container .booking-details span");
let BookedTicketSrc = document.querySelector(".container .booking-details .group-2 #booked-train-src");
let BookedTicketDes = document.querySelector(".container .booking-details .group-2 #booked-train-des");
let BookedTicketClass = document.querySelector(".container .booking-details .group-3 #booked-class");
let BookedTicketDate = document.querySelector(".container .booking-details .group-3 #booked-date");
let Berthdetails = document.querySelector(".container .booking-details .group-3 #berth");

let pnrEntered = document.querySelector(".container .pnr-check form #pnr");
let pnrTrainName =  document.querySelector(".container .pnr-check .pnr-status #pnr-train-name");
let pnrDisply =  document.querySelector(".container .pnr-check .pnr-status .group-1 #pnr-display");
let pnrTrainNo =  document.querySelector(".container .pnr-check .pnr-status .group-1 #pnr-train-no");
let pnrSource =  document.querySelector(".container .pnr-check .pnr-status .group-2 #pnr-from");
let pnrDestination =  document.querySelector(".container .pnr-check .pnr-status .group-2 #pnr-to");
let pnrSeat =  document.querySelector(".container .pnr-check .pnr-status .group-3 #pnr-seat");
let pnrClass =  document.querySelector(".container .pnr-check .pnr-status .group-3 #pnr-class");
let pnrDate =  document.querySelector(".container .pnr-check .pnr-status .group-3 #pnr-date");
let pnrTtainTime = document.querySelector(".container .pnr-check .pnr-status #pnr-train-time");

let trainNo = document.querySelector(".container .search-train input");

let dateObj = new Date();
let currentYear = dateObj.getFullYear();
let currentMonth = dateObj.getMonth() + 1;
let currentDate = dateObj.getDate();


   
loginPage.classList.add("active");

let mediaLoginPage = document.querySelector(".container .menu #media-login");

mediaLoginPage.addEventListener("click",()=>{
    bookContainer.classList.remove("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.add("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
});

let validNumber = /[0-9]{10}/;
let validPassword = /[A-Za-z0-9]{4,}/;
let validName = /[a-zA-Z]+/;

let log_in = false;
let sign_up = false



function storeTicketDetail(newT){
    let ticketDetails = JSON.parse(localStorage.getItem("tickets")) || [];
    ticketDetails.push(newT);
    localStorage.setItem("tickets", JSON.stringify(ticketDetails));
}


//function to generate random pnr number
function generatePNR(){
    let pnr = Math.floor(Math.random() * 10_0_0_0_0_0_0_0_0_0);

    return pnr;
}
//book button click event
bookingbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let arr = SelectedDate.value.split("-");
    let date = arr[2];
    let month = arr[1];
    let year = arr[0];

    if(log_in){
        if(date!=null && boardingStation.value!='' && destinationStation.value!=''){
            if(date>=currentDate && month>=currentMonth && year>=currentYear){
                    
                    fetch("http://localhost:3000/trains")
                    .then(response => response.json())
                    .then(data => {
                            const train = data.find(train => train.source === boardingStation.value.toLowerCase() && train.destination === destinationStation.value.toLowerCase());
                            if(train){                   
                                let PnrG = generatePNR(); 
                                BookedTicketTrain.textContent = `Train Name : ${train.Train_name.toUpperCase()}`;
                                BookedTrainNo.textContent = `TRAIN NO : ${train.Train_no}`;
                                BookedTicketPnr.textContent = `PNR NO : ${PnrG}`;
                                BookedTicketSrc.textContent = `From : ${train.source}`;
                                BookedTicketDes.textContent = `To : ${train.destination}`;
                                Berthdetails.textContent = `Seat : ${generatedTicketNo}/${generatedBerth}`;
                                BookedTicketClass.textContent = `Class : ${SelectedClass.value}`;
                                BookedTicketDate.textContent = `Date : ${SelectedDate.value}`;
                                ticketContainer.style.display = "block";
                                bookingForm.classList.add("media");

                                let obj = {
                                    "train_no": train.Train_no,
                                    "train_name": train.Train_name,
                                    "class": SelectedClass.value,
                                    "source": train.source,
                                    "destination": train.destination,
                                    "timings": train.departure_time + " : " + train.arrival_time,
                                    "seatNo" : generatedTicketNo + "/" + generatedBerth,
                                    "pnr": PnrG,
                                    "date": date + "-" + month + "-" + year,
                                }
                                storeTicketDetail(obj);
                            } else {
                                alert("No Trains Available for this route");
                            }
                    })
                    .catch(e => console.log(e))
                                 
            }
            else{
                alert("Date should not be in past");
            }
        }

        else{
          alert("Please enter all fields");
        }
    } 

    else{
    alert("Please login first");  
    }
    
});

pnrStatus.addEventListener("click",()=>{
    pnrContainer.classList.add("active");
    bookContainer.classList.remove("active");
    loginPage.classList.remove("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
    currentPnrStatus.style.display = "none";
});

pnrbtn.addEventListener("click",(e)=>{
    e.preventDefault();
let pnrfound = false;
    let b = JSON.parse(localStorage.getItem("tickets"));

    try{
    for(let i=0;i<b.length;i++){
    if(b[i].pnr == pnrEntered.value){
        pnrTrainNo.innerHTML += b[i].train_no;
        pnrDisply.innerHTML += b[i].pnr;
        pnrTrainName.innerHTML = `Train - ${b[i].train_name}`;
        pnrSource.innerHTML += b[i].source;
        pnrDestination.innerHTML += b[i].destination;
        pnrSeat.innerHTML += b[i].seatNo;
        pnrClass.innerHTML += b[i].class;
        pnrDate.innerHTML += b[i].date;
        pnrTtainTime.innerHTML = `Time : ${(b[i].timings).split(":").slice(0,2).join(":")}`;

        pnrfound = true;
       currentPnrStatus.style.display = "block";
       break;
    }
   }
}
catch(err){
}
if(!pnrfound){
    alert("PNR not found");
}
   
});


searchTrain.addEventListener("click",()=>{
    TrainSearchPage.classList.add("active");
    bookContainer.classList.remove("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.remove("active");
    registerPage.classList.remove("active");
})


TrainSearchBtn.addEventListener("click",()=>{

    if(trainNo.value==''){
        alert("Please Enter Train Number");
        return;
    }

   let trainFound = false;
   for(let i=0;i<data.length;i++){
    if(data[i].Train_no == trainNo.value){
        searchTrainResult.innerHTML = `
        <p>${trainNo.value} - ${data[i].Train_name}</p>
        <p>${data[i].source} -  ${data[i].destination} </p>
        <p>Arrival:${data[i].arrival_time} -  Departure:${data[i].departure_time} </p> 
        <p> Schedule - ${data[i].sehedule} </p>`;
        trainFound = true;
        break;
    }
   }
   if(trainFound==false){
    alert("No Train is found");
   }

});

//login page activation button click event
login.addEventListener("click",(e)=>{
    e.preventDefault();
    loginPage.classList.add("active");
    pnrContainer.classList.remove("active");
    bookContainer.classList.remove("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
    
});

//login button click event
logInSuccessful.addEventListener("click",(Event)=>{
    Event.preventDefault();

    let a = JSON.parse(localStorage.getItem("user"));

    if(a==null){ 
        alert("No User Found, pls signup");
    }
    else{
       for(let i=0;i<a.length;i++){
           if(a[i].number == LoginNumber.value && a[i].password == LoginPassword.value){
                alert("Logged in Successfully😍");
                bookContainer.classList.add("active");
                loginPage.classList.remove("active");
                log_in = true;
                break;
            }
        }

        if(log_in == false){
            alert("Invalid Credentials");
        }
    } 
});

//sign up page activation button click event
register.addEventListener("click",()=>{
    registerPage.classList.add("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.remove("active");
    bookContainer.classList.remove("active");
    TrainSearchPage.classList.remove("active");

});

function storeSignUp(newobj){
    let existing = JSON.parse(localStorage.getItem("user")) || [];
    existing.push(newobj);
    localStorage.setItem("user", JSON.stringify(existing));
}

//sign up button click event
signUpSuccessful.addEventListener("click",()=>{
    
    if(validNumber.test(SignUpNumber.value)){
        if(validPassword.test(SignUpPassword.value)){
            if(validName.test(signUpName.value)){
                let users = {  
                    "name":signUpName.value,
                    "number":SignUpNumber.value,
                    "password":SignUpPassword.value
                }
                storeSignUp(users); 
                alert("Account created Successfully 😍");
                loginPage.classList.add("active"); //radiracting to login page
                registerPage.classList.remove("active"); //removing signup page class
                sign_up = true;  
            }
            else{
                alert("Name should be atleast 3 characters long and contain only letters");
            } 
        }
        else{
            alert("Password should be atleast 8 characters long and contain only letters and numbers");
        }
    }
    else{
        alert("Invalid Number, Number should be 10 digits");
    }
    
});

//function to generate random ticket number
function generateTicket(){
    let TicketNo = Math.floor(Math.random() * 60) + 1;
    return TicketNo;
} 
let generatedTicketNo = generateTicket(); //stored generated ticket number in generatedTicketNo

//function to generate random berth type
function generateberth(){
    let availableBerth = ['L','M','U',"SL",'SL'];
    let randomBerth = availableBerth[Math.floor(Math.random() * availableBerth.length)];
    return randomBerth;
}
let generatedBerth = generateberth(); //stored in generatedBerth



//media query
let menubtn = document.querySelector(".container .menu #menu-btn");
let menuContainer = document.querySelector(".container .menu");
let menuItems = document.querySelector(".container .menu .menu-container");
menubtn.addEventListener("click",()=>{
    menuContainer.classList.toggle("active");
    menuItems.style.display = "flex";
});

let mediaBookPage = document.querySelector(".container .menu #media-book");

let bookedPage = document.querySelector(".container .book-ticket .booking-details");

mediaBookPage.addEventListener("click",()=>{
    bookContainer.classList.add("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.remove("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
    bookingForm.classList.remove("media");
    bookedPage.style.display = "none";
});

let bookingForm = document.querySelector(".container .book-ticket form");

let mediaPnrPage = document.querySelector(".container .menu #media-pnr");

mediaPnrPage.addEventListener("click",()=>{
    bookContainer.classList.remove("active");
    pnrContainer.classList.add("active");
    loginPage.classList.remove("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
});

let pnrForm = document.querySelector(".container .pnr-check form");

pnrbtn.addEventListener("click",()=>{
    if(currentPnrStatus.style.display == "block"){
        pnrForm.classList.add("media");
    }
    else{
        pnrForm.classList.remove("media");
    }
});

let mediaSearchPage = document.querySelector(".container .menu #media-search");
mediaSearchPage.addEventListener("click",()=>{
    bookContainer.classList.remove("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.remove("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.add("active");
});

bookTicket.addEventListener("click",()=>{
    bookContainer.classList.add("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.remove("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
    bookedPage.style.display = "none";
});

let mediaSignUpPage = document.querySelector(".container .menu #media-signup");

mediaSignUpPage.addEventListener("click",()=>{
    bookContainer.classList.remove("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.remove("active");
    registerPage.classList.add("active");
    TrainSearchPage.classList.remove("active");
    loginPage.classList.add("not");
});

oldAcc.addEventListener("click",()=>{
    loginPage.classList.add("active");
    registerPage.classList.remove("active");
});

 //redirecting to sign up if new user
 newAcc.addEventListener("click",()=>{
    registerPage.classList.add("active");
    loginPage.classList.remove("active");
});