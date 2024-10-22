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

let data = {
    trains:[
        {
             Train_no :12711,
             Train_name: "pinakini express",
             source:"vijayawada",
             destination:"chennai",
             departure_time:"06:10 am",
             arrival_time: "01:06 pm",
             sehedule: "Runs Daily"
        },
        {
             Train_no:12712,
             Train_name:"pinakini express",
             source:"chennai",
             destination:"vijayawada",
             departure_time:"02:5 pm",
             arrival_time:"09:35 pm",
             sehedule:"Runs Daily"
        },
        {
            Train_no :12709,
            Train_name :"simhapuri SF express",
            source :"gudur",
            destination :"secunderabad",
            departure_time :"06:40 pm",
            arrival_time :"05:10 am",
            sehedule :"Runs Daily"
        },
        {
            Train_no :12710,
            Train_name :"simhapuri SF express",
            source :"secunderabad",
            destination :"gudur",
            departure_time :"11:05 pm",
            arrival_time :"09:40 am",
            sehedule :"Runs Daily"
        },
        {
            Train_no :20707,
            Train_name :"visakhapatnam vande bharat express",
            source :"secunderabad",
            destination :"visakhapatnam",
            departure_time :"5:05 am",
            arrival_time :"01:50 pm",
            sehedule :"S M T W F S"
        },
        {
            Train_no :20708,
            Train_name :"secunderabad vande bharat express",
            source :"visakhapatnam",
            destination :"secunderabad",
            departure_time :"02:35 pm",
            arrival_time :"11:20 pm",
            sehedule :"S M T W F S"
        },
        {
        
            Train_no :12603,
            Train_name :"hyderabad sf express",
            source :"chennai",
            destination :"hyderabad",
            departure_time :"04:45 pm",
            arrival_time :"05:50 am",
            sehedule :"S M T W T F S"
        },
        {
        
            Train_no :12604,
            Train_name:"chennai central sf express",
            source :"hyderabad",
            destination :"chennai",
            departure_time :"04:45 pm",
            arrival_time :"05:40 am",
            sehedule :"S M T W T F S"
        },
        {
        
            Train_no :12759,
            Train_name :"charminar express",
            source :"chennai",
            destination :"secunderabad",
            departure_time :"06:05 pm",
            arrival_time :"06:35 am",
            sehedule :"S M T W T F S"
        },
        {
        
            Train_no :12760,
            Train_name :"charminar express",
            source :"secunderabad",
            destination :"chennai",
            departure_time :"06:25 pm",
            arrival_time :"07:00 am",
            sehedule :"S M T W T F S"
        },
        {
        
            Train_no :17480,
            Train_name :"tirupati - puri express",
            source :"tirupati",
            destination :"puri",
            departure_time :"10:40 am",
            arrival_time :"02:50 pm",
            sehedule :"M T W F S"
        },
        {
        
            Train_no :17479,
            Train_name :"puri - tirupati express",
            source :"puri",
            destination :"tirupati",
            departure_time :"06:30 pm",
            arrival_time :"10:45 pm",
            sehedule :"S M W T F"
        },
        {
        
            Train_no :12766,
            Train_name :"tirupati sf express",
            source :"amravati",
            destination :"tirupati",
            departure_time :"06:45 am",
            arrival_time :"06:25 am",
            sehedule :"M T"
        },
        {
             Train_no :12765,
             Train_name :"amravati sf express",
             source :"tirupati",
             destination :"amravati",
             departure_time :"03:35 pm",
             arrival_time :"03:10 pm",
             sehedule :"T S"
        },
        {
             Train_no :18048,
             Train_name :"kacheguda vsg shm exp",
             source :"goa",
             destination :"kacheguda",
             departure_time :"06:30 am",
             arrival_time :"05:00 am",
             sehedule :"S T T F"
        },
        {
            Train_no :18189,
            Train_name :"ernakulam jn. exp",
            source :"tatanagar",
            destination :"ernakulam",
            departure_time :"05:15 am",
            arrival_time :"01:55 am",
            sehedule :"S M T W T F S"
        },
        {
             Train_no :18190,
             Train_name :"tatanagar exp",
             source :"ernakulam",
             destination :"tatanagar",
             departure_time :"07:15 am",
             arrival_time :"05:00 am",
             sehedule :"S M T W T F S"
        },
        {
            Train_no :17229,
            Train_name :"sabari exp",
            source :"thiruvananthapuram",
            destination :"secunderabad",
            departure_time :"06:15 am",
            arrival_time :"12:30 pm",
            sehedule :"S M T W T F S"
        },
        {
             Train_no :17230,
             Train_name :"sabari exp",
             source :"secunderabad",
             destination :"thiruvananthapuram",
             departure_time :"12:20 pm",
             arrival_time :"06:05 pm",
             sehedule :"S M T W T F S"
        }
    ]
}
   
loginPage.classList.add("active");

let mediaLoginPage = document.querySelector(".container .menu #media-login");

mediaLoginPage.addEventListener("click",()=>{
    bookContainer.classList.remove("active");
    pnrContainer.classList.remove("active");
    loginPage.classList.add("active");
    registerPage.classList.remove("active");
    TrainSearchPage.classList.remove("active");
});

let validNumber = /^[0-9]{10}$/;

let validPassword = /[A-Za-z0-9]{4,}/;
let validName = /[a-zA-Z]{4,}/;

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
                let TrainAvaiable = false;
                data.trains.map((val)=>{
                    if(val.source == boardingStation.value.toLowerCase() && val.destination == destinationStation.value.toLowerCase()){
                        TrainAvaiable = true;
                        document.querySelector('.loading-container').style.display = "flex";
                        bookContainer.style.opacity = ".5";
                        setTimeout(()=>{
                            document.querySelector('.loading-container').style.display = "none";
                            bookContainer.style.opacity = "1";
                            bookingForm.classList.add("media");
                            ticketContainer.style.display = "block";
                        },3000)
                        let PnrG = generatePNR(); 
                        BookedTicketTrain.textContent = `Train Name : ${val.Train_name.toUpperCase()}`;
                        BookedTrainNo.textContent = `TRAIN NO : ${val.Train_no}`;
                        BookedTicketPnr.textContent = `PNR NO : ${PnrG}`;
                        BookedTicketSrc.textContent = `From : ${val.source}`;
                        BookedTicketDes.textContent = `To : ${val.destination}`;
                        Berthdetails.textContent = `Seat : ${generatedTicketNo}/${generatedBerth}`;
                        BookedTicketClass.textContent = `Class : ${SelectedClass.value}`;
                        BookedTicketDate.textContent = `Date : ${SelectedDate.value}`;

                        let obj = {
                            "train_no": val.Train_no,
                            "train_name": val.Train_name,
                            "class": SelectedClass.value,
                            "source": val.source,
                            "destination": val.destination,
                            "timings": val.departure_time + " : " + val.arrival_time,
                            "seatNo" : generatedTicketNo + "/" + generatedBerth,
                            "pnr": PnrG,
                            "date": date + "-" + month + "-" + year,
                        }
                        storeTicketDetail(obj);
                    } 
                })
                if(!TrainAvaiable){
                    document.querySelector('.loading-container').style.display = "flex";
                    bookContainer.style.opacity = ".5";
                    setTimeout(()=>{
                        document.querySelector('.loading-container').style.display = "none";
                        document.querySelector('.no-ticket-container').classList.add('down');
                        document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `NO TRAINS AVAILABLE FOR THIS ROUTE`;
                    },3000)
                    bookContainer.style.opacity = "1";
                }                        
         }
        else{
            document.querySelector('.loading-container').style.display = "flex";
                    setTimeout(()=>{
                        document.querySelector('.loading-container').style.display = "none";
                        document.querySelector('.no-ticket-container').classList.add('down');
                        document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Date should not be in past`;
                    },3000)
        }
        }
        else{
            document.querySelector('.no-ticket-container').classList.add('down');
            document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Please enter all fields`;
        }
    } 
    else{
        document.querySelector('.no-ticket-container').classList.add('down');
        document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Please login first`;
    } 
});

document.querySelector(".no-ticket-container i").addEventListener("click",()=>{
    document.querySelector('.no-ticket-container').classList.add("reverse");
    document.querySelector('.no-ticket-container').classList.remove("down");
    
})

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
            document.querySelector('.loading-container').style.display = "flex";
            setTimeout(()=>{
                document.querySelector('.loading-container').style.display = "none";
                currentPnrStatus.style.display = "block";
            },3000)
            pnrTrainNo.innerHTML = `TrainNo: ${b[i].train_no}`;
            pnrDisply.innerHTML = `PNR: ${b[i].pnr}`;
            pnrTrainName.innerHTML = `Train - ${b[i].train_name}`;
            pnrSource.innerHTML = b[i].source;
            pnrDestination.innerHTML = b[i].destination;
            pnrSeat.innerHTML = b[i].seatNo;
            pnrClass.innerHTML = b[i].class;
            pnrDate.innerHTML = b[i].date;
            pnrTtainTime.innerHTML = `Time : ${(b[i].timings).split(":").slice(0,2).join(":")}`;

            pnrfound = true;
            break;
        }
    }
}
catch(err){
}
    if(!pnrfound){
        document.querySelector('.loading-container').style.display = "flex";
                setTimeout(()=>{
                    document.querySelector('.loading-container').style.display = "none";
                    document.querySelector('.no-ticket-container').classList.add('down');
                    document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Invalid PNR `;
                },3000)
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
        document.querySelector('.loading-container').style.display = "flex";
        setTimeout(()=>{
            document.querySelector('.loading-container').style.display = "none";
            document.querySelector('.no-ticket-container').classList.add('down');
            document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Pls Enter Train Number`;
        },3000)
        return;
    }

   let trainFound = false;
    data.trains.map((val)=>{
        if(val.Train_no == trainNo.value){
            document.querySelector('.loading-container').style.display = "flex";
            setTimeout(()=>{
                document.querySelector('.loading-container').style.display = "none";
                searchTrainResult.innerHTML = `
                <p>${trainNo.value} - ${val.Train_name}</p>
                <p>${val.source} -  ${val.destination} </p>
                <p>Arrival:${val.arrival_time} -  Departure:${val.departure_time} </p> 
                <p> Schedule - ${val.sehedule} </p>`;
            },3000)
            trainFound = true;
        }
    });

   if(!trainFound){
    document.querySelector('.loading-container').style.display = "flex";
    setTimeout(()=>{
        document.querySelector('.loading-container').style.display = "none";
        document.querySelector('.no-ticket-container').classList.add('down');
        document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Train is currently not available`;
    },3000)
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
        document.querySelector('.loading-container').style.display = "flex";
        setTimeout(()=>{
            document.querySelector('.loading-container').style.display = "none";
            document.querySelector('.no-ticket-container').classList.add('down');
            document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `No User Found. Pls Sign up`;
        },3000)
    }
    else{
       for(let i=0;i<a.length;i++){
           if(a[i].number == LoginNumber.value && a[i].password == LoginPassword.value){
                document.querySelector('.loading-container').style.display = "flex";
                setTimeout(()=>{
                    document.querySelector('.loading-container').style.display = "none";
                    document.querySelector('.no-ticket-container').classList.add('down');
                    document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Login Successfull😍`;
                    setTimeout(()=>{
                    document.querySelector('.no-ticket-container').classList.remove('down');
                    document.querySelector('.no-ticket-container').classList.add('reverse');
                    bookContainer.classList.add("active");
                    loginPage.classList.remove("active");
                    },1000)
                },3000)
                log_in = true;
                break;
            }
        }

        if(log_in == false){
            document.querySelector('.no-ticket-container').classList.add('down');
            document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Invalid Credentials`;
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
                document.querySelector('.loading-container').style.display = "flex";
                setTimeout(()=>{
                    document.querySelector('.loading-container').style.display = "none";
                    document.querySelector('.no-ticket-container').classList.add('down');
                    document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Account created Successfull😍`;
                    setTimeout(()=>{
                    document.querySelector('.no-ticket-container').classList.remove('down');
                    document.querySelector('.no-ticket-container').classList.add('reverse');
                    
                    loginPage.classList.add("active");
                    registerPage.classList.remove("active"); //removing signup page
                    },1000)
                },3000) 
            }
            else{
                document.querySelector('.no-ticket-container').classList.add('down');
                document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Name should be atleast 3 characters long`;
            } 
        }
        else{
            document.querySelector('.no-ticket-container').classList.add('down');
            document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Password should be atleast 8 characters long and contain only letters and numbers`;
        }
    }
    else{
        document.querySelector('.no-ticket-container').classList.add('down');
            document.querySelector('.no-ticket-container .no-ticket-msg').innerHTML = `Invalid Number, Number should be 10 digits`;
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