
document.getElementById('clear').onclick = function (event) {
    event.preventDefault();
    document.getElementById("returnvalue").value = "";
}

var myAverage = document.querySelector("#selectedweight");

var onlyKilo = document.querySelector("#kg");
var onlyGrams = document.querySelector("#g");
var onlyOunces = document.querySelector("#o");
var onlyStones = document.querySelector("#s");
var onlyPounds = document.querySelector("#ps");
myAverage.addEventListener('click', function () {

    if (myAverage.value === 'kilograms') {
        onlyKilo.disabled = true;
        onlyGrams.disabled = false;
        onlyOunces.disabled = false;
        onlyStones.disabled = false;
        onlyPounds.disabled = false;
    }
    else if (myAverage.value === 'grams') {
        onlyGrams.disabled = true;
        onlyKilo.disabled = false;
        onlyOunces.disabled = false;
        onlyStones.disabled = false;
        onlyPounds.disabled = false;
    }
    else if (myAverage.value === 'ounces') {
        onlyOunces.disabled = true;
        onlyGrams.disabled = false;
        onlyKilo.disabled = false;
        onlyStones.disabled = false;
        onlyPounds.disabled = false;
    }
    else if (myAverage.value === 'stones') {
        onlyStones.disabled = true;
        onlyGrams.disabled = false;
        onlyKilo.disabled = false;
        onlyOunces.disabled = false;
        onlyPounds.disabled = false;

    }
    else if (myAverage.value === 'pounds') {
        onlyPounds.disabled = true;
        onlyGrams.disabled = false;
        onlyKilo.disabled = false;
        onlyOunces.disabled = false;
        onlyStones.disabled = false;

    }

})


class convertKilograms{
    constructor(weight,convertweight){
        this.weight=weight;
        this.convertweight=convertweight;
    }
    convert(k1,k2,k3,k4){
       
    if (this.convertweight === "grams") {

        document.getElementById('returnvalue').value = parseFloat(this.weight) * k1;
    } else if (this.convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * k2;
    } else if (this.convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * k3;
    } else if (this.convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * k4;
    }

}
 }



class convertGrams{ 

    constructor(weight,convertweight){
        this.weight=weight;
        this.convertweight=convertweight;
    }
    convert(g1,g2,g3,g4){

    if (this.convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / g1;
    }
    else if (this.convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * g2;
    }
    else if (this.convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * g3;
    }
    else if (this.convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * g4;
    }
}
}
class convertPounds{
    constructor(weight,convertweight){
        this.weight=weight;
        this.convertweight=convertweight;
    }
    convert(p1,p2,p3,p4){
    if (this.convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * p1;
    }
    else if (this.convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / p2;
    }
    else if (this.convertweight === "grams") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / p3;
    }
    else if (this.convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * p4;
    }
}
}
class convertOunces{
    constructor(weight,convertweight){
        this.weight=weight;
        this.convertweight=convertweight;
    }
    convert(o1,o2,o3,o4){

   
    if (this.convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * o1;
    }
    else if (this.convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / o2;
    }
    else if (this.convertweight === "grams") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / o3;
    }
    else if (this.convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * o4;
    }
}
}
class convertStones {
   
    constructor(weight,convertweight){
        this.weight=weight;
        this.convertweight=convertweight;
    }
    convert(s1,s2,s3,s4){

    if (this.convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * s1;
    }
    else if (this.convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / s2;
    }
    else if (this.convertweight === "grams") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) / s3;
    }
    else if (this.convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(this.weight) * s4;
    }

}
}

var button = document.getElementById('compute').onclick = function (event) {
    event.preventDefault();
    var weight = document.getElementById("weight").value;
    var convertweight = document.getElementById("weightselected").value;
    var selectedweight = document.getElementById("selectedweight").value;
    if (selectedweight === "kilograms") {
    let d= new convertKilograms(weight,convertweight)
    d.convert(1000,2.2046,35.274,0.1574);
    }
    else if (selectedweight === "grams") {

        let d= new convertGrams(weight,convertweight)
        d.convert(1000,0.0022046,0.03527,0.00015747);
    }
    else if (selectedweight === "pounds") {

        let d= new convertPounds(weight,convertweight);
        d.convert(16,2.2046,0.0022046,0.071429);
    }
    else if (selectedweight === "ounces") {
        
        let d= new convertOunces(weight,convertweight);
        d.convert(0.0625,35.274,0.035274,0.0044643);
    }
    else if (selectedweight === "stones") {
        let d= new convertStones(weight,convertweight);
        d.convert( 224 ,0.15747,  0.00015747 , 14);
    }
}
