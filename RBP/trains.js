const trains = [
        {
             Train_no :12711,
             Train_name: "pinakini express",
             source:"vijayawada",
             destination:"chennai",
             middle_station: "Nellore",
             departure_time:"06:10 am",
             arrival_time: "01:06 pm",
             sehedule: "Runs Daily"
        },
        {
             Train_no:12712,
             Train_name:"pinakini express",
             source:"chennai",
             destination:"vijayawada",
             middle_station: "ongole",
             departure_time:"02:5 pm",
             arrival_time:"09:35 pm",
             sehedule:"Runs Daily"
        },
        {
            Train_no :12709,
            Train_name :"simhapuri SF express",
            source :"gudur",
            destination :"secunderabad",
            middle_station: "vijayawada",
            departure_time :"06:40 pm",
            arrival_time :"05:10 am",
            sehedule :"Runs Daily"
        },
        {
            Train_no :12710,
            Train_name :"simhapuri SF express",
            source :"secunderabad",
            middle_station: "vijayawada",
            destination :"gudur",
            departure_time :"11:05 pm",
            arrival_time :"09:40 am",
            sehedule :"Runs Daily"
        },
        {
            Train_no :20707,
            Train_name :"visakhapatnam vande bharat express",
            source :"secunderabad",
            middle_station: "vijayawada",
            destination :"visakhapatnam",
            departure_time :"5:05 am",
            arrival_time :"01:50 pm",
            sehedule :"S M T W F S"
        },
        {
            Train_no :20708,
            Train_name :"secunderabad vande bharat express",
            source :"visakhapatnam",
            middle_station: "vijayawada",
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
            middle_station: "guntur",
            departure_time :"04:45 pm",
            arrival_time :"05:50 am",
            sehedule :"S M T W T F S"
        },
        {
        
            Train_no :12604,
            Train_name:"chennai central sf express",
            source :"hyderabad",
            destination :"chennai",
            middle_station: "guntur",
            departure_time :"04:45 pm",
            arrival_time :"05:40 am",
            sehedule :"S M T W T F S",
        },
        {
        
            Train_no :12759,
            Train_name :"charminar express",
            source :"chennai",
            middle_station: "Tenali",
            destination :"secunderabad",
            departure_time :"06:05 pm",
            arrival_time :"06:35 am",
            sehedule :"S M T W T F S"
        },
        {
        
            Train_no :12760,
            Train_name :"charminar express",
            source :"secunderabad",
            middle_station: "vijayawada",
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
            middle_station: "visakhapatnam",
            departure_time :"10:40 am",
            arrival_time :"02:50 pm",
            sehedule :"M T W F S"
        },
        {
        
            Train_no :17479,
            Train_name :"puri - tirupati express",
            source :"puri",
            destination :"tirupati",
            middle_station: "visakhapatnam",
            departure_time :"06:30 pm",
            arrival_time :"10:45 pm",
            sehedule :"S M W T F"
        },
        {
        
            Train_no :12766,
            Train_name :"tirupati sf express",
            source :"amravati",
            middle_station: "Nellore",
            destination :"tirupati",
            departure_time :"06:45 am",
            arrival_time :"06:25 am",
            sehedule :"M T"
        },
        {
             Train_no :12765,
             Train_name :"amravati sf express",
             source :"tirupati",
             middle_station: "Nellore",
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
            middle_station: "kurnool city",
             departure_time :"06:30 am",
             arrival_time :"05:00 am",
             sehedule :"S T T F"
        },
        {
            Train_no :18189,
            Train_name :"ernakulam jn. exp",
            source :"tatanagar",
            middle_station: "vijayawada",
            destination :"ernakulam",
            departure_time :"05:15 am",
            arrival_time :"01:55 am",
            sehedule :"S M T W T F S"
        },
        {
             Train_no :18190,
             Train_name :"tatanagar exp",
             source :"ernakulam",
            middle_station: "vijayawada",
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
            middle_station: "tirupati",
            departure_time :"06:15 am",
            arrival_time :"12:30 pm",
            sehedule :"S M T W T F S"
        },
        {
             Train_no :17230,
             Train_name :"sabari exp",
             source :"secunderabad",
             middle_station: "tirupati",
             destination :"thiruvananthapuram",
             departure_time :"12:20 pm",
             arrival_time :"06:05 pm",
             sehedule :"S M T W T F S"
        },
        {
            Train_no :12622,
            Train_name :"Tamil Nadu express",
            source :"New Delhi",
            destination :"Chennai",
            middle_station: "nagpur",
            departure_time: "09:05 pm",
            arrival_time: "06:35 am",
            sehedule :"S M T W T F S"
        },
        {
            Train_no :12621,
            Train_name :"Tamil Nadu express",
            source :"Chennai",
            destination :"New Delhi",
            middle_station: "nagpur",
            departure_time: "10:10 pm",
            arrival_time: "07:04 am",
            sehedule :"S M T W T F S"
        },
        {
            Train_no :20805,
            Train_name :"Andhra Pradesh express",
            source :"visakhapatnam",
            destination :"New Delhi",
            middle_station: "nagpur",
            departure_time: "10:00 pm",
            arrival_time: "05:40 am",
            sehedule :"S M T W T F S"
        },
        {
            Train_no :20806,
            Train_name :"Andhra Pradesh express",
            source :"New Delhi ",
            destination :"visakhapatnam",
            middle_station: "nagpur",
            departure_time: "08:15 am",
            arrival_time: "09:40 pm",
            sehedule :"S M T W T F S"
        },
        {
            Train_no :12723,
            Train_name :"Telangana express",
            source :"Secunderabad",
            middle_station: "Bhopal",
            destination :"New Delhi",
            departure_time: "06:25 am",
            arrival_time: "07:40 am",
            sehedule :"S M T W T F S"
        },
        {
            Train_no :12724,
            Train_name :"Telangana express",
            source :"New Delhi",
            destination :"Secunderabad",
            middle_station: "Bhopal",
            departure_time: "04:00 pm",
            arrival_time: "03:55 pm",
            sehedule :"S M T W T F S"
        }
]

const stations = [
    {
        Station_code: "NLR",
        Station_name: "Nellore",
        Location: "https://maps.app.goo.gl/MRdaNNoZSfyyWyAM6",
    },
    {
        Station_code: "BZA",
        Station_name: "Vijayawada Junction",
        Location: "https://maps.app.goo.gl/ynVefZcP4FhGw5X7A",
    },
    {
        Station_code: "SC",
        Station_name: "Secunderabad Junction",
        Location: "https://maps.app.goo.gl/ameKX5eCiBwHsCgK9",
    },
    {
        Station_code: "MAS",
        Station_name: "MGR Chennai Central",
        Location: "https://maps.app.goo.gl/hegDtPQyBjidpwtaA",
    },
    {
        Station_code: "SBC",
        Station_name: "KSR Bengaluru City  Junction",
        Location: "https://maps.app.goo.gl/Z6FDX86nbftxWftXA",
    },
    {
        Station_code: "VSG",
        Station_name: "Goa - Vasco Da Gama",
        Location: "https://maps.app.goo.gl/ZmismeHPrYtBvjsu9",
    },
    {
        Station_code: "MMCT",
        Station_name: "Mumbai Central",
        Location: "https://maps.app.goo.gl/S6QksxpFM3Yi4G1P7",
    },
    {
        Station_code: "NDLS",
        Station_name: "New Delhi",
        Location: "https://maps.app.goo.gl/9SbaMvMY2VKHUtRf6",
    },
]

let suggestion = [];

for(let i=0;i<trains.length;i++){
   if(!suggestion.includes(trains[i].source.toUpperCase())){
    suggestion.push(trains[i].source.toUpperCase());
   }
}

let AvaTrain = [];
trains.map((val)=>{
    AvaTrain.push(val.Train_no + " - " + val.Train_name);
})
