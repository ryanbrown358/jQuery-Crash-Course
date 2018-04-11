// how to hide elements and id
//$("h1#heading1").hide();

// classes
//$(".heading2").hide();

//target and change the color of a elemtn 
// $("p span").css("color", "red");
// $(" span").css("color", "red");

// target a ul list item 
// $("ul#list li:first").css("color", "red");
// $("ul#list li:last").css("color", "green");
// $("ul#list li:even").css("background-color", "yellow");
// $("ul#list li:odd").css("background-color", "grey");
// $("ul#list li:nth-child(3n)").css("list-style", "none");


// hiding some more elements
// $(":button").hide();
// $(":submit").hide();
// $(":text").hide();

//hreh att selectors
//$("[href]").css("color", "red");
//$('a[href="yahoo.com"]').css("color", "green");
//grabs everything
//$('*').hide();









// Events with jQuery 
$(document).ready(function(){
   /* $("#btn1").click(function(){
        alert("Button 1 clicked");
    });

     $("#btn1").on("click", function(){
         alert("Button Clicked")
     });

    hiding stuff when this button is clicked
    $("#btn1").click(function(){
        //$(".para2").hide();
        $(".para2").toggle();
    });

    $("#btn2").click(function(){
        $(".para2").show();
    });
    

    $("#btn1").dblclick(function(){
        $(".para2").toggle();
    });

   $("#btn2").on("mouseenter", function(){
    $("#para1").toggle();
   });

   $("#btn2").on("mouseleave", function(){
    $("#para1").toggle();
   });
   
    $("#btn2").on("mousemove", function(){
        $("#para1").toggle();
    });

    $("#btn1").click(function(e){
        console.log(e.currentTarget.id);
        console.log(e.currentTarget.innerHTML);
    });
    
    $(document).on("mousemove", function(e){
        $("#coords").html("Coords: Y: " +e.clientY+" X: "+e.clientX);
    });
    
   $("input").focus(function(){
    alert("focus");
   });
   */
  $("input").focus(function(){
    $(this).css("background", "blue");
  });
  $("input").blur(function(){
    $(this).css("background", "white");
  });

//   $("input").keyup(function(e){
//     console.log(e.target.value);
//   });

  $("select#gender").change(function(e){
    alert(e.target.value);
  });

  $("#form").submit(function(e){
    e.preventDefault();
    let name = $("input#name").val();
    console.log(name);
  });
});