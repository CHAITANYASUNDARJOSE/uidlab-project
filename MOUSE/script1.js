    function f1()
    {
    let text = "Here, we will find the position of the word";
    let n = text.search(/word/i);
    document.getElementById("demo").innerHTML=n;
    }

    function f2()
    {
    let text1 = document.getElementById("demo1").innerHTML; 
    document.getElementById("demo1").innerHTML = text1.replace("project", "capstone project");
    }
    
    function clickevent()  
    {  
        document.write("This is clickevent");  
    }  
    function mouseoverevent()
    {
        alert("Hey,Mouse over me ");
    }

    function mousedownevent() 
    {
        document.getElementById("myP").style.color = "red";
    }
      
    function mouseupevent() 
    {
        document.getElementById("myP").style.color = "blue";
    }
    function mousemoveevent()
    {
        alert("Thank u Visit again!!");
    }
    function focusevent()  
    {  
        document.getElementById("input1").style.background=" aqua";  
    }  

