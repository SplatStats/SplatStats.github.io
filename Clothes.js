"use strict";

/*jshint es5: false */

//instance varibles
var ChosenHedgear;
var ChosenClothes;
var ChosenShoes;

var FilterMainAbility = "(None)";
var FilterBrand = "(None)";
var FilterStar = "(None)";

var HeadGearOriginal = [];
var ClothesOriginal = [];
var ShoesOriginal = [];

var Chosen

/*
*    EVENTS
*/

document.getElementById("MainAbility").addEventListener("onchange", Filter, false); 

// This function will get the event target in a browser-compatible way
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var HeadgearLB = document.getElementById('HeadGearLB');
HeadgearLB.onmousedown = function(event) {
    var target = getEventTarget(event);
    ChosenHedgear = (target.innerHTML);
};

var ClothesLB = document.getElementById('ClothesLB');
ClothesLB.onmousedown = function(event) {
    var target = getEventTarget(event);
    ChosenClothes = (target.innerHTML);
};

var ShoesLB = document.getElementById('ShoesLB');
ShoesLB.onmousedown = function(event) {
    var target = getEventTarget(event);
    ChosenShoes = (target.innerHTML);
};

//FILTERING EVENTS
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="MainAbility"]').onchange=changeEventHandlerHead;
},false);

function changeEventHandlerHead(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else {
            FilterMainAbility = event.target.value;
            Filter();
         }
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="Brand"]').onchange=changeEventHandlerBrand;
},false);

function changeEventHandlerBrand(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else {
            FilterBrand = event.target.value;
            Filter();
         }
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="Stars"]').onchange=changeEventHandlerStar;
},false);

function changeEventHandlerStar(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else {
            FilterStar = event.target.value; 
            Filter();
         }
}

/*
* GEAR CLASS
*/

class Gear{
    constructor(Name, MainAbility, GearBrand, Stars){
        this.Name = Name;
        this.MainAbility = MainAbility;
        this.GearBrand = GearBrand;
        this.Stars = Stars;
    }
}

/*
* BRAND CLASS
*/

class Brand{

    constructor(Name){
        this.Name = Name;
        this.Common = getCommon(Name);
        this.Uncommon = getUncommon(Name);
    }
   
}

 //fucking js not allowing my multivalue map.... so switch statements it is
   function getCommon(Name){
        switch(Name){
            case "amiibo":
                return "Any! Pray to RN Gesus!";
            case "Annaki":
                return "Cold Blooded";
            case "Cuttlegear":
                return "Any! Pray to the squid sisters!";
            case "Enperry":
                return "Sub Power Up";
            case "Firefin":
                return "Ink Saver (Sub)";
            case "Forge":
                return "Special Power Up";
            case "Grizzco":
                return "Any! Only 100 Gold Eggs? Shame...";
            case "Inkline":
                return "Bomb Defense Up";
            case "Krak-On":
                return "Swim Speed Up";
            case "Rockenberg":
                return "Run Speed Up";
            case "Skalop":
                return "Quick Respawn";
            case "Splash Mob":
                return "Ink Saver (Main)";
            case "SquidForce":
                return "Ink Resistance Up";
            case "Takoroka":
                return "Special Charge Up!";
            case "Tentatek":
                return "Ink Recovery Up";
            case "Toni Kensa":
                return "Cold Blooded";
            case "Zekko":
                return "Special Saver";
            case "Zink":
                return "Quick Super Jump";
        }
    }
    function getUncommon(Name){
        switch(Name){
            case "amiibo":
                return "Any! Pray to RN Gesus!";
            case "Annaki":
                return "Special Saver";
            case "Cuttlegear":
                return "Any! Pray to the squid sisters!";
            case "Enperry":
                return "Ink Resistance Up";
            case "Firefin":
                return "Ink Recovery Up";
            case "Forge":
                return "Ink Saver (Sub)";
            case "Grizzco":
                return "Any! Only 100 Gold Eggs? Shame...";
            case "Inkline":
                return "Cold Blooded";
            case "Krak-On":
                return "Bomb Defense Up";
            case "Rockenberg":
                return "Swim Speed Up";
            case "Skalop":
                return "Special Saver";
            case "Splash Mob":
                return "Run Speed Up";
            case "SquidForce":
                return "Ink Saver (Main)";
            case "Takoroka":
                return "Special Power Up";
            case "Tentatek":
                return "Quick Super Jump";
            case "Toni Kensa":
                return "Sub Power Up";
            case "Zekko":
                return "Special Charge Up";
            case "Zink":
                return "Quick Respawn";
        }
    } 

/*
*  DATA SETUP
*  This is where the parsing of the text files to array list will occur. It only occurs once on page load up
*/

//reads in a text file
function readTextFile(file, OriginalDataArray)
{
    var temp;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                //text file to array via new line
                temp=rawFile.responseText.split("\n");
                
                //array to object array
                for (var i = 0; i < temp.length; i++){
                    var tempStr = temp[i].split("\t");
                    var g = new Gear(tempStr[0], tempStr[1], new Brand(tempStr[2]), tempStr[3]);
                    OriginalDataArray.push(g);
                }
            }
        }
    }
    rawFile.send(null);
}


function Filter(){
    var filteredHead = [];
    var filteredClothes = [];
    var filteredShoes = [];
    ClearList();
    
    //filter out main abilities
    for(var i =0; i < HeadGearOriginal.length; i++){
        
        if(FilterMain == "(None)"){
                continue;
            }
        
        if (HeadGearOriginal[i].MainAbility == FilterMainAbility){
            filteredHead.push(HeadGearOriginal[i]);
        }
    }
    
    //filter out Brand
    for(var i =0; i < filteredHead.length; i++){
        if (filteredHead[i].GearBrand.Name != FilterBrand ){
            
            if(FilterBrand == "(None)"){
                continue;
            }
            
            filteredHead.splice(i,1);
            if(i = 0){
                i=0;
            }
            else{
                i--;
            }
        }
    }
    
    //filter out Brand
    for(var i =0; i < filteredHead.length; i++){
        FilterStar = FilterStar.replace("\"", "")
        if (parseInt(filteredHead[i].Stars) == parseInt(FilterStar) ){
        }
        else{
            if(FilterStar == "(None)"){
                continue;
            }
            
            filteredHead.splice(i,1);
            if(i = 0){
                i=0;
            }
            else{
                i--;
            }
        }
    }
    
    //filter out main abilities
    for(var i =0; i < ClothesOriginal.length; i++){
        if (ClothesOriginal[i].MainAbility == FilterMainAbility){
            filteredClothes.push(ClothesOriginal[i]);
        }
    }
    
    //filter out Brand
    for(var i =0; i < filteredClothes.length; i++){
        if (filteredClothes[i].GearBrand.Name != FilterBrand ){
            
            if(FilterBrand == "(None)"){
                continue;
            }
            
            filteredClothes.splice(i,1);
            if(i = 0){
                i=0;
            }
            else{
                i--;
            }
        }
    }
    
    //filter out Brand
    for(var i =0; i < filteredClothes.length; i++){
        if (parseInt(filteredClothes[i].Stars) == parseInt(FilterStar) ){
        }
        else{
            if(FilterStar == "(None)"){
                continue;
            }
            
            filteredClothes.splice(i,1);
            if(i = 0){
                i=0;
            }
            else{
                i--;
            }
        }
    }
    
    
    //filter out main abilities
    for(var i =0; i < ShoesOriginal.length; i++){
        if (ShoesOriginal[i].MainAbility == FilterMainAbility){
            filteredShoes.push(ShoesOriginal[i]);
        }
    }
    
    //filter out Brand
    for(var i =0; i < filteredShoes.length; i++){
        if (filteredShoes[i].GearBrand.Name != FilterBrand ){
            
            if(FilterBrand == "(None)"){
                continue;
            }
            
            filteredShoes.splice(i,1);
            if(i = 0){
                i=0;
            }
            else{
                i--;
            }
        }
    }
    
    //filter out Brand
    for(var i =0; i < filteredShoes.length; i++){
        if (parseInt(filteredShoes[i].Stars) == parseInt(FilterStar) ){
        }
        else{
            if(FilterStar == "(None)"){
                continue;
            }
            
            filteredShoes.splice(i,1);
            if(i = 0){
                i=0;
            }
            else{
                i--;
            }
        }
    }
    
    
    //display them 
    
    for(var i = 0; i< filteredHead.length;i++){
        GenerateLBDiv(filteredHead[i].Name, "HeadGearLB");
    }
    for(var i = 0; i< filteredClothes.length;i++){
        GenerateLBDiv(filteredClothes[i].Name, "ClothesLB");
    }
    for(var i = 0; i< filteredShoes.length;i++){
        GenerateLBDiv(filteredShoes[i].Name, "ShoesLB");
    }
}

function FilterMain(){
    
}

//create element for list
function GenerateLBDiv(InnerText, Element){
    var div = document.createElement("div");
    
    div.innerHTML = InnerText;

    document.getElementById(Element).appendChild(div);
}

//Clear the list
function ClearList(){
    var myNode = document.getElementById("HeadGearLB");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    myNode = document.getElementById("ClothesLB");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    myNode = document.getElementById("ShoesLB");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

readTextFile("Data/Clothes/Head Gear.txt", HeadGearOriginal);
readTextFile("Data/Clothes/Clothes.txt", ClothesOriginal);
readTextFile("Data/Clothes/Shoes.txt", ShoesOriginal);
//var b = new Brand("Zink");

var t = HeadGearOriginal[0].Name;
GenerateLBDiv("Splatoon2", "HeadGearLB");

