// alert("loading...")
/*
function addnewwefield() {
    // console.log("adding new field");
    let newnode = document.createElement("textarea");
    newnode.classList.add('form-contorl');
    newnode.classList.add('wefield');
    newnode.classList.add('mt-2');
    newnode.setAttribute("rows", 3);
    // newnode.setAttribute("width", 13);

    let weob = document.getElementById("we");
    let weaddbuttonob = document.getElementById("weaddbutton");

    weob.insertBefore(newnode, weaddbuttonob);
}
*/

function addnewwefield() {
    // console.log('Adding new Field');
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'enter here');


    let weob = document.getElementById('we');
    let weaddbuttonob = document.getElementById('weaddbutton');

    weob.insertBefore(newNode, weaddbuttonob);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'enter here');

    let aqob = document.getElementById('aq');
    let aqaddbuttonob = document.getElementById('aqaddbutton');

    aqob.insertBefore(newNode, aqaddbuttonob);
}

// genearating cv

function generateCV() {
    // console.log("generating cv..")

    // namefield
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    // direct 
    document.getElementById('nameT2').innerHTML = namefield;
    // contacts
    let contactfield = document.getElementById("contactfield").value; //html line No. = 30
    let contactT1 = document.getElementById("contactT1"); // html line no. =108
    contactT1.innerHTML = contactfield;

    // address
    let addressfield = document.getElementById("addressfield").value; //html line No. = 30
    let addressT1 = document.getElementById("addressT1"); // html line no. =108
    addressT1.innerHTML = addressfield;

    // important links
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value; //line 42 and 115
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value; //line 42 and 115
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedfield").value; //line 42 and 115

    // objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value; //line 59 

    // work experience
    let wearr = document.getElementsByClassName('wefield') //line 151 & 64

    let str = " ";

    for (let e of wearr) {
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById('weT').innerHTML = str;

    // Academic qualification....
    let aqarr = document.getElementsByClassName('eqfield') //line 151 & 64

    let str1 = " ";

    for (let e of aqarr) {
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    // code for setting image ......
    let file = document.getElementById('imagefield').files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // set iamge to template
    reader.onloadend = function() {
        document.getElementById('imgTemplate').src = reader.result;
    };




    // ...................................................
    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-template').style.display = "block";


}

// print cv
function printCV() {
    window.print();
}