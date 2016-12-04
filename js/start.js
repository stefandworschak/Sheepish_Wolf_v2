    $(document).ready(function(){
        
        var url = location.search;
        var loggedin = url.replace("?loggedin=","");
        var screen = $("body").width();
        
        if(loggedin !== "1") { 
        
        $("header").hide();
        $("nav").hide();
        $("main").hide();
        $("footer").hide();
        $("#age").show();
        $("body").css("background","#1e1e1e");
        $("#submit_age").on("click", function(){
            
            
            
            var age = $("#dob").val();
            var date = new Date(age);
            
            console.log(age);
            if(date.getFullYear() < 1988) {
                $("body").css("background","#2e2e2e");
                $("#age").hide();
                $("header").show();
                if(screen <= 480) {$("#mobile_menu").show();}
                else {$("#navbar").toggleClass("navbar_hide");}
                $("nav#navbar").show();
                $("main").show();
                $("footer").show();
                
            } else {
                
                $("#error").html("Sorry, you are too young to look at our awesome beer. Come back when you're 18! In the meantime <a href='http://www.coca-cola.com'>go here</a>.")
                
            }
            
        });
        
        }
        
        $("#mobile_menu_icon").click(function(){

            $("#navbar").toggleClass("navbar_hide");

        });

    });