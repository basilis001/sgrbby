
// HIER STAAN MIJN VARIABELE 
    //startatributten beginnen hier
            var sugarGifties = document.querySelector(".input2");
            var sugarBby = document.querySelector(".sugarbabe");
            var sound = document.querySelector("#audio");
            var naam = document.querySelector("#vulIn");
            
        //dit verdwijnt na start
            var start = document.querySelector(".startknopa");
            console.log(start);
            var beginKlaar = document.querySelector(".startbitch");
    
        //eindatributten(pop-ups) beginnen hier
            var winnaar = document.querySelector("#win");
            var loser = document.querySelector("#lose");

    //Input vari's
        //mijn knoppen/plaatjes
         //Giftiessss
            var plainTix        = document.querySelector("#plaintix");
            console.log(plainTix);
            var greenNeck       = document.querySelector("#greenneck");
            var blackCar        = document.querySelector("#blackcar");
            var goldLongear     = document.querySelector("#goldlongear");
            var Sugar           = document.querySelector("#sugar");
            var pearlBedel      = document.querySelector("#pearlbedel");

         //Stonies
            var necklace        = document.querySelector("#necklace");
            console.log(necklace);
            var goldArm          = document.querySelector("#goldarm");
            var greyCar          = document.querySelector("#greycar");
            var bedel            = document.querySelector("#bedel");
            var pearlNeck        = document.querySelector("#pearlneck");
            var candy            = document.querySelector("#candy");
            var pearlRing        = document.querySelector("#pearlring");


    //OUTPUT VARIA
            var saltyMoodArray = ["neutraal.png","min.png","minmin.png","loser.png"];
                console.log(saltyMoodArray) ;
            var sugaryMoodArray = ["neutraal.png","plus.png","plusplus.png","plusplusplus.png","winaar.png"];
                console.log(sugaryMoodArray)
            var bitchSaidWhat = document.querySelector("#BitchSays");
            console.log(bitchSaidWhat);
                

    // SPELSTATUS VARI     
            var counter     = document.querySelector(".counter"); 
            var giftScore   = 0; 
            console.log(giftScore);
            var giftscoreCijfer = document.querySelector("#GiftCounter");
            console.log(giftscoreCijfer); 
            
            var stoneScore = 0;
            console.log(stoneScore)
            var stoneScoreCijfer = document.querySelector("#Stonecounter");
                console.log(stoneScoreCijfer);
                    
        // muziek
            //https://levelup.gitconnected.com/game-development-breakout-in-javascript-5e5d142d3203
        var sounds = {
            lostSound1: new Audio("./muziek/Attitudebiddie.mp3"),
            lostSound2: new Audio("./muziek/sadviolet.m4a"),
            winSound1:  new Audio("./muziek/SensLaugh.m4a"),
            winSound2:  new Audio('./muziek/sexiphone.m4a'),
            goodSound:  new Audio("./muziek/goodsoundeffect.mp3"),
            kissSound:  new Audio("./muziek/kissykissy.wav"),
            badSound:   new Audio("./muziek/badsoundeffect.mp3"),
            music:      new Audio("./muziek/sugardaddy1.mp3"),
        };
  
        
//HIER STAAN MIJN FUNCTIES
    // START PAGE BEGINNEN KNOP
        //muziek achtergrond
        function playSound() {
            sounds.music.loop = true;
            sounds.music.volume = .1;
            sounds.music.play();  
        };

        //Spel laadt in
        function beginSpel(){ 
            console.log("HiGirly");
                sugarGifties.style.display ="block";
                counter.style.display="block";

            //Beginscherm verdwijnt
                beginKlaar.style.display = "none";
                sugarBby.src = "Images/output/neutraal.png";  
                naam.style.display= "none";
                
                //Begroeting 
                    //https://stackoverflow.com/questions/14319274/change-css-properties-on-click
                    bitchSaidWhat.style.cssText = "margin-top: 4px;position: absolute; right: 530px; top: 150px;";
                    //Hulp van David de Vries
                    console.log(naam.value);
                    bitchSaidWhat.textContent = "Try and win me over, " +(naam.value);
                    };
                    console.log(bitchSaidWhat);
                 
    // Actions 
            //oplopende actie functie voor goede gifts
            function sugarMood (){
                console.log("are we ready");
                
                //soundeffects 
                sounds.goodSound.play(); 
                sounds.goodSound.volume = .3;
                console.log(this);
                
                //zet functie uit na klik/gebruik
                this.removeEventListener("click" , sugarMood);
                
                //laad de benodigde punten, sounds en reacties in
                    // telt punten
                if (stoneScore >= 1 ) {
                    stoneScore = stoneScore-1;
                    stoneScoreCijfer.textContent=stoneScore;

                    //Reacties
                    var outputSaltbabe  = saltyMoodArray[stoneScore];
                    console.log(outputSaltbabe);
                    sugarBby.src = 'Images/output/'+outputSaltbabe; 
                    
                    // telt punten
                } else  { giftScore = giftScore+1;
                        giftscoreCijfer.textContent=giftScore;
                        console.log(outputSugarbabe);
                        
                    //Reacties
                        var outputSugarbabe = sugaryMoodArray[giftScore];
                        console.log(outputSugarbabe);
                        sugarBby.src = 'Images/output/'+outputSugarbabe;  
                    }
                        console.log(giftScore)
                        console.log(stoneScore)
                    
                    //Soundseffect reactie
                if (giftScore == 3) {
                    sounds.kissSound.play();  
                }
                    //Winst! --> Reactie en sound    
                if (giftScore == 4) {
                    
                    //giftes verdwijnen
                    sugarGifties.style.display ="none";
                    counter.style.display=("none");
                    
                    //eind scherm laad in
                    winnaar.style.display="block"; 
                    naam.style.display="none"
                    bitchSaidWhat.style.display="none"
                   
                    //Victory Muziek begint
                    sounds.winSound2.play();  
                    sounds.music.pause();
                     
                
               //Animatie aangepast op 
                //Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3
                    //bepaald element
                    var id = null;
                    var elem = sugarBby;   
                    var pos = -150;
                    clearInterval(id);

                  //lengte/snelheid van inladen
                  id = setInterval(frame, 55);
                  function frame() {
                    if (pos == 20) {
                      clearInterval(id);
                      sounds.winSound1.play();

                      //waarvandaan en welke kant op
                    } else {
                      pos++; 
                      elem.style.right = pos + 'px'; 
                    }
                  }
                }
            }
         
         //aflopende actie
            //oplopende actie functie voor foute gifts
        function saltyMood (){
                console.log("hohoi");

                //soundeffects bij klik foute keuzes
                sounds.badSound.play();
                sounds.badSound.volume = .3;

                //zet functie uit na klik/gebruik
                this.removeEventListener("click" , saltyMood);

                //telt punten
                if (giftScore >= 1 ) {
                    giftScore = giftScore-1;
                    giftscoreCijfer.textContent=giftScore;
                   
                    // Reacties 
                    var OutputSugarbabe = sugaryMoodArray[giftScore];
                    console.log(OutputSugarbabe);
                    sugarBby.src = 'Images/output/'+ OutputSugarbabe;  
                    
                    //telt punten
                } else { stoneScore = stoneScore+1;
                        stoneScoreCijfer.textContent=stoneScore; 
                        
                        //Reacties
                        var OutputSaltbabe  = saltyMoodArray[stoneScore];
                        console.log(OutputSaltbabe);
                        sugarBby.src = 'Images/output/'+OutputSaltbabe;      
                    }
                    //Verloren --> reactie en sound
                if ( stoneScore == 3 ) {

                    //giftes verdwijnen
                    sugarGifties.style.display ="none";
                    counter.style.display=("none");
                   
                    //laad verliezer scherm in
                    loser.style.display="block";
                    sounds.music.pause(); 
                    sounds.lostSound1.play();
                    sounds.lostSound2.play();
                    bitchSaidWhat.style.display="none"
                
                //Animatie aangepast op 
                //Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3
                    var id = null;
                    var elem = sugarBby;   
                    var pos = 700;
                    clearInterval(id);
                    id = setInterval(frame, 20);
                    
                    function frame() {
                        if (pos == 2) {
                        clearInterval(id);
                        } else {
                        pos++; 
                        
                        elem.style.left = pos + 'px'; 
                        }
                    }
                    }
                } ;
            

        // Spel eindigt klik om te herladen
            function reload() {
                reload = location.reload();
            };
   

    //Eventslisteners  
       
        // START        
        start.addEventListener("click", beginSpel); 
        start.addEventListener("click", playSound);

        //Gifties
        greenNeck.addEventListener("click" , sugarMood);    
        plainTix.addEventListener("click", sugarMood);
        blackCar.addEventListener("click" , sugarMood); 
        goldLongear.addEventListener("click" , sugarMood); 
        Sugar.addEventListener("click" , sugarMood);  
        pearlBedel.addEventListener("click" , sugarMood);

        //Stonies
        pearlNeck.addEventListener("click" , saltyMood); 
        candy.addEventListener("click", saltyMood); 
        pearlRing.addEventListener("click" , saltyMood);
        greyCar.addEventListener("click" , saltyMood)
        necklace.addEventListener("click" , saltyMood); 
        goldArm.addEventListener("click" , saltyMood); 
        bedel.addEventListener("click" , saltyMood); 

        // END
        loser.addEventListener("click", reload);
        winnaar.addEventListener("click", reload);