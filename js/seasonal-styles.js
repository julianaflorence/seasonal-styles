$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert("next season");
    
       //I used switch statments to loop between seasons//
       switch(season){
        ///////////SPRING//////////
       
        case "Spring":{
         $("html").css("background-color","#2B7129");
        $("#wear").attr("src","images/spring-wear.jpg")
        //replace logo ussing attr again
        $("#logo").attr("src","images/spring.gif")
        //usually, give every elemnt an id if it needs to be called, can't always guarentee its unique elemnt without it
        $("header 3").text("Jump into spring!")
            };
            break;
       
        /////////SUMMER//////////
        case "Summer":{
        $("html").css("background-color","#EBA52B");
        $("#wear").attr("src","images/summer-wear.jpg")
        $("#logo").attr("src","images/summer.gif")
        $("header 3").text("Splash into summer")
        };
        break;
       
        /////////FALL////////////
        case "Fall": {
        $("html").css("background-color","#A81124");
        $("#wear").attr("src","images/fall-wear.jpg")  
        $("#logo").attr("src","images/fall.gif")
        $("header 3").text("Cozy up into fall")
        };
        break;

        /////WINTER///////////////////
        case "Winter": {
        $("html").css("background-color","#005393");
        $("#wear").attr("src","images/winter-wear.jpg")
        $("#logo").attr("src","images/winter.gif")
        $("header 3").text("Stay warm this winter")
        };
        break;

        //////Default/////
        case "Default": {
            $("html").css("background-color","pink");
            $("#wear").attr("src","images/roger.jpg")
            $("#logo").attr("src","images/four-seasons.gif")
            $("header 3").text("welcome")
            };
            break;
       }
    }); 
});