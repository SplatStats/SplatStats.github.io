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
    
    var myNode = document.getElementById('HeadGearSpan');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    
    //finds the chosen pic for images to add
    var GearPics = HeadGearOriginal.filter(x => x.Name === ChosenHedgear.toString())
    
    //creates elemetns
    var Fig = document.createElement("figure");    
    var img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].MainAbility + ".png";
    img.height = 150;
    img.width = 150;
    
    var FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "Main Ability";
    
    var src = document.getElementById("HeadGearSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
    //create elements
    Fig = document.createElement("figure");
    img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].GearBrand.Common + ".png";
    img.height = 100;
    img.width = 100;
    
    FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "Common Roll";
    
    src = document.getElementById("HeadGearSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
    //create elements
    Fig = document.createElement("figure");
    img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].GearBrand.Uncommon + ".png";
    img.height = 100;
    img.width = 100;
    
    FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "UnCommon Roll";
    
    src = document.getElementById("HeadGearSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
};

var ClothesLB = document.getElementById('ClothesLB');
ClothesLB.onmousedown = function(event) {
    var target = getEventTarget(event);
    ChosenClothes = (target.innerHTML);
    
    var myNode = document.getElementById('ClothesSpan');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    
    //finds the chosen pic for images to add
    var GearPics = ClothesOriginal.filter(x => x.Name === ChosenClothes.toString())
    
    //creates elemetns
    var Fig = document.createElement("figure");    
    var img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].MainAbility + ".png";
    img.height = 150;
    img.width = 150;
    
    var FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "Main Ability";
    
    var src = document.getElementById("ClothesSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
    //create elements
    Fig = document.createElement("figure");
    img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].GearBrand.Common + ".png";
    img.height = 100;
    img.width = 100;
    
    FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "Common Roll";
    
    src = document.getElementById("ClothesSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
    //create elements
    Fig = document.createElement("figure");
    img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].GearBrand.Uncommon + ".png";
    img.height = 100;
    img.width = 100;
    
    FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "UnCommon Roll";
    
    src = document.getElementById("ClothesSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
};

var ShoesLB = document.getElementById('ShoesLB');
ShoesLB.onmousedown = function(event) {
    var target = getEventTarget(event);
    ChosenShoes = (target.innerHTML);
    
    var myNode = document.getElementById('ShoesSpan');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    
    //finds the chosen pic for images to add
    var GearPics = ShoesOriginal.filter(x => x.Name === ChosenShoes.toString())
    
    //creates elemetns
    var Fig = document.createElement("figure");    
    var img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].MainAbility + ".png";
    img.height = 150;
    img.width = 150;
    
    var FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "Main Ability";
    
    var src = document.getElementById("ShoesSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
    //create elements
    Fig = document.createElement("figure");
    img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].GearBrand.Common + ".png";
    img.height = 100;
    img.width = 100;
    
    FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "Common Roll";
    
    src = document.getElementById("ShoesSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
    
    //create elements
    Fig = document.createElement("figure");
    img = document.createElement("img");
    img.src = "Images/Abilities/" + GearPics[0].GearBrand.Uncommon + ".png";
    img.height = 100;
    img.width = 100;
    
    FigCaption = document.createElement("figcaption");
    FigCaption.innerHTML = "UnCommon Roll";
    
    src = document.getElementById("ShoesSpan");
    Fig.appendChild(img);
    Fig.appendChild(FigCaption);
    src.appendChild(Fig);
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
            Sort();
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
            Sort();
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
            Sort();
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



let myObj = {
    "amiibo": {
        common: "Any! Pray to RN Gesus!",   
    },
    "Annaki": {
        common: "Cold Blooded",
        uncommon: "Special Saver",
    },
    
}

class Brand{

    constructor(Name){
        this.Name = Name;
        this.Common = getCommon(Name);
        this.Uncommon = getUncommon(Name);
    }
   
}

 //fucking js not allowing my multivalue map.... so switch statements it is
   function getCommon(Name){
       //return myObj[Name].common;
        switch(Name){
            case "amiibo":
                return "Any";
            case "Annaki":
                return "Cold Blooded";
            case "Cuttlegear":
                return "Any";
            case "Enperry":
                return "Sub Power Up";
            case "Firefin":
                return "Ink Saver (Sub)";
            case "Forge":
                return "Special Power Up";
            case "Grizzco":
                return "Any";
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
                return "Special Charge Up";
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
                return "Any";
            case "Annaki":
                return "Special Saver";
            case "Cuttlegear":
                return "Any";
            case "Enperry":
                return "Ink Resistance Up";
            case "Firefin":
                return "Ink Recovery Up";
            case "Forge":
                return "Ink Saver (Sub)";
            case "Grizzco":
                return "Any";
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


function Filter(ArrayToFilter, FilterToCheck, FilterType){
    
    var TempList= [];
    TempList = ArrayToFilter;
    
    //does filtering need to be done
    if (FilterToCheck == "" || FilterToCheck.toLowerCase() == "(none)"){
        return ArrayToFilter;
    }
    //sorting Abilities
    else{
        if(FilterType == "Ability"){
            for(var i = 0; i < TempList.length; i++){
                if(TempList[i].MainAbility.toLowerCase() != FilterToCheck.toLowerCase()){
                    
                    TempList.splice(i,1);
                    if(i = 0){
                        i=0;
                    }
                    else{
                        i--;
                    }   
                }
            }
            return TempList;
        }
        
        //SortingBrands
        if(FilterType == "Brand"){
            for(var i = 0; i < TempList.length; i++){
                if(TempList[i].GearBrand.Name.toLowerCase() != FilterToCheck.toLowerCase()){
                    
                    TempList.splice(i,1);
                    if(i = 0){
                        i=0;
                    }
                    else{
                        i--;
                    }   
                }
            }
            return TempList;
        }
        
        //Stars
        if(FilterType == "Stars"){
            for(var i = 0; i < TempList.length; i++){
                if(parseInt(TempList[i].Stars) != parseInt(FilterToCheck)){
                    
                    TempList.splice(i,1);
                    if(i = 0){
                        i=0;
                    }
                    else{
                        i--;
                    }   
                }
            }
        }
        return TempList;
    }
    
    return TempList;
}

function Sort(){
    
    var Head = HeadGearOriginal.slice(0);
    var clothes = ClothesOriginal.slice(0);
    var Shoes = ShoesOriginal.slice(0);
    
    ClearList();
    
    Head = Filter(Head, FilterMainAbility, "Ability");
    Head = Filter(Head, FilterBrand, "Brand");
    Head = Filter(Head, FilterStar, "Stars");
    
    clothes = Filter(clothes, FilterMainAbility, "Ability");
    clothes = Filter(clothes, FilterBrand, "Brand");
    clothes = Filter(clothes, FilterStar, "Stars");
    
    Shoes = Filter(Shoes, FilterMainAbility, "Ability");
    Shoes = Filter(Shoes, FilterBrand, "Brand");
    Shoes = Filter(Shoes, FilterStar, "Stars");
    
    //display them 
    
    for(var i = 0; i< Head.length;i++){
        GenerateLBDiv(Head[i].Name, "HeadGearLB");
    }
    for(var i = 0; i< clothes.length;i++){
        GenerateLBDiv(clothes[i].Name, "ClothesLB");
    }
    for(var i = 0; i< Shoes.length;i++){
        GenerateLBDiv(Shoes[i].Name, "ShoesLB");
    }
    
    
}


function FilterMain(){
    
}

//create element for list
function GenerateLBDiv(InnerText, Element){
    var div = document.createElement("li");
    
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

