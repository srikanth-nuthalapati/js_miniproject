document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('data-target');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

function storeSignUp(newobj){
    let existing = JSON.parse(localStorage.getItem("user")) || [];
    existing.push(newobj);
    localStorage.setItem("user", JSON.stringify(existing));
}

const loginPhone = document.querySelector('#login form div #login-number');
const loginPass = document.querySelector('#login form div #login-password');
const loginBtn = document.querySelector('.container #login form button');
let login = false;

//login event handle
loginBtn.addEventListener('click',(e) => {
    e.preventDefault();
    document.getElementById("loading-screen").style.display = "flex";
    document.querySelector("#loading-screen p").textContent = 'validation, please wait...';
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        let user = JSON.parse(localStorage.getItem("user"));
        if(user != null){
            let found = user.find(auth => auth.number === loginPhone.value && auth.password === loginPass.value);
            if(found){
                alert("Login Successfull");
                document.getElementById('login').classList.remove('active');
                document.getElementById('book-ticket').classList.add('active');
                login = true;
            }
            else{
                alert("Invalid Credentials");
            }
        }
        else{
            alert("No User Found");
        }
    },3000);
});

let validNumber = /^[0-9]{10}$/;
let validPassword = /[A-Za-z0-9]{4,}/;
let validName = /[a-zA-Z]{4,}/;

//signup event handle
const signUpName = document.querySelector('#signup form div #signup-name');
const signUpPhone = document.querySelector('#signup form div #signup-number');
const signUpPass = document.querySelector('#signup form div #signup-password');
const signUpBtn = document.querySelector('#signup form button');

signUpBtn.addEventListener("click",(e) => {
    e.preventDefault();
    document.getElementById("loading-screen").style.display = "flex";
    document.querySelector("#loading-screen p").textContent = 'Creating Account, please wait...';
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        if(validNumber.test(signUpPhone.value)){
            if(validPassword.test(signUpPass.value)){
                if(validName.test(signUpName.value)){
                    let users = {  
                        "name":signUpName.value,
                        "number":signUpPhone.value,
                        "password":signUpPass.value
                    }
                    storeSignUp(users);
                    alert("Sign up successful");
                    document.getElementById('login').classList.add('active');
                    document.getElementById('signup').classList.remove('active');

                }
                else{
                    alert("Invalid Name");
                }
            }
            else{
                alert("Invalid Password");
            }
        }
        else{
            alert("Invalid Phone Number");
        }
    },3000);
});

const loginPage = document.querySelector('#login');
function show(){
    if(loginPage.classList.contains('active')){
        if(loginPass.type === "password"){
            loginPass.type = "text";
        }
        else {
            loginPass.type = "password";
        }
    }  
    else{
        if(signUpPass.type === "password"){
            signUpPass.type = "text";
        }
        else{
            signUpPass.type = "password";
        }  
    }
}

let data = trains;
let routes = [...suggestion];
const suggestionsFrom =  document.querySelector(".sug-from");
const suggestionsTo =  document.querySelector(".sug-to");
const boardingStation = document.querySelector('#book-ticket form #from');
const destinationStation = document.querySelector('#book-ticket form #to');

function displaySuggestionsUp(items,isBoarding) {

    if(isBoarding){
        suggestionsFrom.innerHTML = ""; // Clear previous suggestions
        if (items.length === 0) {
            suggestionsFrom.style.display = "none";
            return;
        }
        items.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                    li.addEventListener("click", function () {
                        boardingStation.value = item; // Set input to selected item
                        suggestionsFrom.innerHTML = "";
                        suggestionsFrom.style.display = "none";
                    });
                    suggestionsFrom.appendChild(li);
        });
        suggestionsFrom.style.display = "block"; // Show the list
    }
    else{
        suggestionsTo.innerHTML = ""; // Clear previous suggestions
        if (items.length === 0) {
            suggestionsTo.style.display = "none";
            return;
        }
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.addEventListener("click", function () {
                destinationStation.value = item; // Set input to selected item
                suggestionsTo.innerHTML = "";
                suggestionsTo.style.display = "none";
            });
            suggestionsTo.appendChild(li);
        });
        suggestionsTo.style.display = "block"; // Show the list
    }
}

boardingStation.addEventListener('input', () => {
    const query = boardingStation.value.trim().toUpperCase();
    if(query) {
        const filteredSuggestions = routes.filter(item => item.includes(query));
        displaySuggestionsUp(filteredSuggestions,true);  
    }
    else {
        suggestionsFrom.innerHTML = "";
        suggestionsFrom.style.display = "none";
    }
});

destinationStation.addEventListener('input', () => {
    const query = destinationStation.value.trim().toUpperCase();
    if(query) {
        const filteredSuggestions = routes.filter(item => item.includes(query));
        
        displaySuggestionsUp(filteredSuggestions,false);  
    }
    else {
        suggestionsTo.innerHTML = "";
        suggestionsTo.style.display = "none";
    }
});

function generatePNR(){
    let pnr = Math.floor(Math.random() * 10_0_0_0_0_0_0_0_0_0);

    return pnr;
}

function storeTicketDetail(newT){
    let ticketDetails = JSON.parse(localStorage.getItem("tickets")) || [];
    ticketDetails.push(newT);
    localStorage.setItem("tickets", JSON.stringify(ticketDetails));
}

function generateTicket(){
    let TicketNo = Math.floor(Math.random() * 60) + 1;
    return TicketNo;
} 
let generatedTicketNo = generateTicket();

function generateberth(){
    let availableBerth = ['L','M','U',"SL",'SL'];
    let randomBerth = availableBerth[Math.floor(Math.random() * availableBerth.length)];
    return randomBerth;
}
let generatedBerth = generateberth(); //stored in generatedBerth


let dateObj = new Date();
let currentYear = dateObj.getFullYear();
let currentMonth = dateObj.getMonth() + 1;
let currentDate = dateObj.getDate();

const doj = document.querySelector('#book-ticket form #date');
const quota = document.querySelector('#book-ticket form #Quota');
const bookingBtn = document.querySelector('#book-ticket button');

//booking event handle
bookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!login){
        alert("Please login first");
        return;
    }
    let arr = doj.value.split("-");
    let date = arr[2];
    let month = arr[1];
    let year = arr[0];
    if(date!=null && boardingStation.value!='' && destinationStation.value!=''){
        if(date>=currentDate || month>currentMonth || year>currentYear){
            let TrainAvaiable = false;

            document.getElementById("loading-screen").style.display = "flex";
            document.querySelector("#loading-screen p").textContent = 'Booking your ticket, please wait...';
            setTimeout(() => {
                data.map((val)=>{
                    if(val.source == boardingStation.value.toLowerCase() && val.destination == destinationStation.value.toLowerCase()){
                        TrainAvaiable = true;
                        let pnr = generatePNR();
                        let obj = {
                            "train_no": val.Train_no,
                            "train_name": val.Train_name,
                            "class": quota.value,
                            "source": val.source,
                            "destination": val.destination,
                            "timings": val.departure_time + " : " + val.arrival_time,
                            "seatNo" : generatedTicketNo + "/" + generatedBerth,
                            "pnr": pnr,
                            "date": date + "-" + month + "-" + year,
                        }
                        storeTicketDetail(obj);                       
                            window.location.href = "booking_details.html";
                            // Populate booking details
                    }
                });
                document.getElementById("loading-screen").style.display = "none";
                if(!TrainAvaiable){
                    alert("No Train Available");
                }
            }, 3000); // 3-second delay
        }
        else{
            alert('date should not be in past');
        }
    }
    else{
        alert('Please fill all the fields');
    }
});

let pnrInput = document.querySelector('#pnr-status form div #pnr');
let pnrBtn = document.querySelector('#pnr-status form button');

//pnr event handle
pnrBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById("loading-screen").style.display = "flex";
    document.querySelector("#loading-screen p").textContent = 'Fetching Pnr, please wait...';
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        let pnr = pnrInput.value;
        let tickets = JSON.parse(localStorage.getItem('tickets'));
        let ticket = tickets.find((val) => val.pnr == pnr);
        if(ticket){
         document.querySelector('#pnr-status #pnr-details').style.display = "flex";
         document.querySelector('#pnr-status #pnr-details ul #pnr-number').textContent = ticket.pnr;
         document.querySelector('#pnr-status #pnr-details ul #train-name').textContent = ticket.train_name + " - " + ticket.train_no;
         document.querySelector('#pnr-status #pnr-details ul #journey-date').textContent = ticket.date;
         document.querySelector('#pnr-status #pnr-details ul #boarding-station').textContent = ticket.source;
         document.querySelector('#pnr-status #pnr-details ul #destination-station').textContent = ticket.destination;
         document.querySelector('#pnr-status #pnr-details ul #ticket-status').textContent = 'CNF';
        }
        else{
         document.querySelector('#pnr-status #pnr-details').style.display = "none";
         alert('pnr not found');
        }
    },3000);
});

let Trains = AvaTrain;
const trainSuggestions = document.getElementById("trainSuggestions");
let trainInput = document.querySelector('#search-train form div #train-name');
trainInput.addEventListener('input', () => {
    let query = trainInput.value.toLowerCase();
    if(query){
        let filteredTrains = Trains.filter(train => train.includes(query));
        displayTrains(filteredTrains);
    }
    else{
        trainSuggestions.innerHTML = "";
        trainSuggestions.style.display = "none";
    }
});

function displayTrains(item) {
    trainSuggestions.innerHTML = "";
    if(item.length === 0) {
        trainSuggestions.style.display = "none";
        return;
    }
    item.forEach(val => {
        let li = document.createElement('li');
        li.textContent = val;
        li.addEventListener('click', () => {
            trainInput.value = val.split('-')[0];
            trainSuggestions.textContent = "";
            trainSuggestions.style.display = "none";
        });
        trainSuggestions.appendChild(li);
    });
    trainSuggestions.style.display = "block";
}

let trainBtn = document.querySelector('#search-train form button');

//train event handle
trainBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById("loading-screen").style.display = "flex";
    document.querySelector("#loading-screen p").textContent = 'Fetching Train, please wait...';
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        if(trainInput.value == ""){
         document.querySelector('#search-train #train-details').style.display = "none";
            alert('Please enter train name');
            return;
        }
        let query = data.find(val => val.Train_no === Number(trainInput.value));
        
        if(query){
            document.querySelector('#search-train #train-details').style.display = "flex";
            document.querySelector('#search-train #train-details ul #train-number').textContent = query.Train_no;
            document.querySelector('#search-train #train-details ul #train-name').textContent = query.Train_name;
            document.querySelector('#search-train #train-details ul #boarding-station').textContent = query.source;
            document.querySelector('#search-train #train-details ul #destination-station').textContent = query.destination;
            document.querySelector('#search-train #train-details ul #schedule').textContent = query.sehedule;
        }
        else {
         document.querySelector('#search-train #train-details').style.display = "none";
         alert('Train not found');
        }

    },3000);
});

let stationSug = stations;
let stationInput = document.getElementById('station-name');
let stationSuggList = document.getElementById('stationSuggestions');

function displayStation(item) {
    stationSuggList.innerHTML = ""; // Clear previous suggestions
    if (item.length === 0){
        stationSuggList.style.display = "none";
        return;
    }
    item.forEach(val => {
        const li = document.createElement("li");
        li.innerHTML = `${val.Station_code}  - ${val.Station_name}`;

        li.addEventListener("click", ()=>{
            stationInput.value = val.Station_name;
            stationSuggList.innerHTML = "";
            stationSuggList.style.display = "none";
        })
        stationSuggList.appendChild(li);
    })
    stationSuggList.style.display = "block";
}

stationInput.addEventListener('input', function(){
    let station = stationInput.value.toUpperCase();
    if(station){
        let match = stationSug.filter(val => val.Station_code.includes(station) || val.Station_name.toUpperCase().includes(station));
        displayStation(match)
    }
    else {
        stationSuggList.innerHTML = "";
        stationSuggList.style.display = "none";
    }
});

let stationBtn = document.querySelector('#search-station form button');

//station event handle
stationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("loading-screen").style.display = "flex";
    document.querySelector("#loading-screen p").textContent = 'Fetching Station, please wait...';
    let station = stationInput.value.trim();
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        if(station == ""){
            document.getElementById('station-details').style.display = 'none';
            alert('Please enter station name');
            return;
        }
        let query = stationSug.find(val => val.Station_name == station);
        if(query){
            
            document.getElementById('station-details').style.display = 'flex';
            document.getElementById('station-code').textContent = query.Station_code;
            document.getElementById('Station-name').textContent = query.Station_name;
        }
        else {
            document.getElementById('station-details').style.display = 'none';
            alert('Please enter a station name');
        }
    },3000);
})