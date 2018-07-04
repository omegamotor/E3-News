
/*function makePhrases(){
    var words1 = ["nieprzerwane","wielowarstwowe","tysiącmetrowe","biznesowe","niepowstrzymane"];
    var words2 = ["wspomagane","wartościowe","zorientowane","skoncentrowane","wyrównane"];
    var words3 = ["procesy","rozwiązania","punkty","strategie","wizje"];
    
    
    
    // zmienna = zaokrąglij w dół((losowa liczba 0-1) * (dłógość tablicy))
    var rand1 = Math.floor(Math.random() * words1.length)
    var rand2 = Math.floor(Math.random() * words2.length)
    var rand3 = Math.floor(Math.random() * words3.length)
    
    
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    document.write(phrase);
}

makePhrases();
*/

/* TTADFSADSAD
var scores = 
    [
    60,50,60,58,54,54,
    58,50,52,54,48,69,
    34,55,51,52,44,51,
    69,64,66,55,52,61,
    46,31,57,52,44,18,
    41,53,55,61,51,44
    ];
var costsa = [
    .25,.27,.25,.25,25,.25,
    .33,.31,.25,.29,.27,.22,
    .31,.25,.25,.33,.21,.25,
    .25,.25,.28,.25,.24,.22,
    .20,.25,.30,.25,.34,.25,
    .25,.25,.27,.25,.26,.29]

function raport (){
    var max = 0;
    var maxList = [];
    
    for(var i=0 ; i<scores.length ; i++){
        document.write("Płyn do baniek nr " + (i+1) + " wynik: " + scores[i]+"<br>" );
         if(max<scores[i])
        { max=scores[i]; }    
    }
    
    for(var i=0 ; i<scores.length ; i++){
        if(max==scores[i])
        {maxList.push(i+1);}
    }
    
    
    document.write("<br>"+"Liczba testów " + scores.length + "<br>");
    document.write("Największa liczba wytworzonych baniek: " + max  + "<br>");
    document.write("Płyny z najlepszym wynikiem " + maxList+"<br>"+ "<br>"+ "<br>" );   
}
raport();














var p =["Czu-Czu-Lada","Miętowy chłód","Ciasto naleśnikowe","Guma Balonowa"];
var h = [false,false,false,true];

function chackBubbleGum(products,hasBubbleGum)
{
for(var i=0;i<hasBubbleGum.length; i++)  //0<4 i =0
{
    if (hasBubbleGum[i])
    {
        document.write(products[i] + " zawiera gumę do żucia.");
    }

}
}

chackBubbleGum(p,h);

document.write("<br><br><br><br><br><br><br>");



var taxi = {
    
    make:"SieMoCorp",
    model:"Taxi",
    year: 1955,
    color:"żółty",
    passengers:4,
    convertible:false,
    millage:281341,
    fuel:0,
    started:false,
    start:function(){
        this.started=true;
    },
    stop:function(){
      this.started=false;  
    },
    drive:function(){
        if(this.started){
            
            if(this.fuel>0){
                console.log("Jazda ! To jest pierwsza metoda !");
               }
            else{
                console.log("Brak paliwa. Zatankuj");
                this.stop();
            }
            
            
        }
        else{
            console.log("Tak daleko nie zajedziemy !");
        }
    },
    addFuel:function(amount){
        
        this.fuel=this.fuel+amount;
}
};


function wyszukaj(car){
    if((car.year>1960)||(car.millage>10000))
        {
            document.write("Co za szmelc ! Pan chyba żartuje !!<br><br>");
        }
    else{
        document.write("Piękne auto biorę !!<br><br>");
        
    }
}
wyszukaj(taxi);
taxi.drive();




for (var pop in taxi){
    document.write(pop+" : "+taxi[pop]+"<br>");
}


var access = document.getElementById("code9");
var code = access.innerHTML;
code=code + " północy";
console.log(code);

*/

