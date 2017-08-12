"use strict";

/*jshint es5: false */

//instance varibles
var ChosenHedgear;
var ChosenClothes;
var ChosenShoes;

var HeadGearOriginal = [];
var ClothesOriginal = [];
var ShoesOriginal = [];
/*
*    EVENTS
*/

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




function GenerateLBDiv(InnerText, Element){
    var div = document.createElement("div");
    
    div.innerHTML = InnerText;

    document.getElementById(Element).appendChild(div);
}

readTextFile("Data/Clothes/Head Gear.txt", HeadGearOriginal);
readTextFile("Data/Clothes/Clothes.txt", ClothesOriginal);
readTextFile("Data/Clothes/Shoes.txt", ShoesOriginal);
//var b = new Brand("Zink");

var t = HeadGearOriginal[0].Name;
GenerateLBDiv("Splatoon2", "HeadGearLB");

