function ajax(){
     
    
    document.getElementById("button1").disabled = true;
    document.getElementById("button1").innerHTML = "Here is your shopping list !";
    document.getElementById("button1").style.background="#eae6f0";
    document.getElementById("button1").style.color="#000000";
    document.getElementById("button1").style.fontSize="large";
    document.getElementById("button2").innerHTML = "Reset";
    // document.getElementById("button1").style.display = 'none';

    //Creating and XHR Object
    var xhttp = new XMLHttpRequest();
    //Event listener
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState==4 && this.status==200){
           var response = JSON.parse(this.responseText);
        //    console.log(response);
        var Jproducts = response.products;
        // console.log(Jproducts);
    var table = document.getElementById('myTable')
            console.log(Jproducts.length);
            var output = ""
            for(var i=0; i < Jproducts.length; i++){
                
                output+="<tr>\n";
                      output += "<th scope=\"row\">" + Jproducts[i].serialnumber +"</th>\n";
                      output += "<td>" + Jproducts[i].name +"</td>\n";
                      output += "<td>" +Jproducts[i].quantity +"</td>\n";
                      output += "<td>" + Jproducts[i].unit +"</td>\n";
                       output += "<td>" + Jproducts[i].department +"</td>\n";
                      output += "<td>" +  Jproducts[i].notes +"</td>\n";
                   output += "</tr>\n";
            
               
            }
            // console.log(output);
           
            table.innerHTML+=output;
        }
    }
    
    xhttp.open("GET","grocery.json ",true);
    xhttp.send();
    }