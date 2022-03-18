var allitems=localStorage.getItem('myobject');

//Getting Edit Container

var container=document.getElementById('container');

//Getting Edit Page Elements
var eminterviewee=document.getElementById('iwemail1');
var eminterviewer=document.getElementById('iremail1');
var st=document.getElementById('st-time1');
var et=document.getElementById('end-time1');
var subedbtn=document.getElementById('subeditbtn')

//Setting Edit container to none-> Only activates on click of edit buttton from table

container.style.display='none';
if(allitems==null){
    allitems=[];
}
else{
    allitems=JSON.parse(allitems);
}
//Access table Element

var table=document.querySelector(".table");

//Loop to run on every value of localstorage to add to the table

  allitems.forEach(function(value){
      addElementotable(value);
  })
  function addElementotable(value){
      
      //Creating Table elements to represent in html file
      
    var row=document.createElement('tr');

    var email1=document.createElement('td');
    email1.innerHTML=value.Intervieweemail;
    row.appendChild(email1);

    var email2=document.createElement('td');
    email2.innerHTML=value.Intervieweremail;
    row.appendChild(email2);

    var sttime=document.createElement('td');
    sttime.innerHTML=value.StartTime;
    row.appendChild(sttime);

    var entime=document.createElement('td');
    entime.innerHTML=value.EndTime;
    row.appendChild(entime);

    var editcol=document.createElement('td');
    var editbutton=document.createElement('button');
    editbutton.innerHTML="Edit";
    editcol.appendChild(editbutton);
    row.appendChild(editcol);

    var id1=value.id;
    var delcol=document.createElement('td');
    var delbutton=document.createElement('button');
    delbutton.innerHTML="Delete";
    delcol.appendChild(delbutton);
    row.appendChild(delcol);
    table.appendChild(row);
      
      //Function for edit
      
    editbutton.addEventListener('click',function(){
        
        //Edit container visible after clicking edit button
        
        container.style.display='block';
        var insidecontainer=container.children;
     
            //Initial values of edit form set to the values of row from which it was clicked
        
             eminterviewee.value=value.Intervieweemail;
          
             eminterviewer.value=value.Intervieweremail;

             st.value=value.StartTime;
     
             et.value=value.EndTime;
              
             //Submit button of edit page
             subedbtn.onclick=function(){
             
                if(st.value>=et.value){
                    alert("Start time should be less than End time");
                }
                else{
                    //Looping over all values of localstorage
                    
                for(var i=0;i<allitems.length;i++){

                     //Finding the element from localstorage that we have edit through id
                    
                    if(allitems[i].id==id1){
                        
                        //creating object fro new edited values
                        
                        var body={
                            id:id1,
                            Intervieweemail:eminterviewee.value,
                            Intervieweremail:eminterviewer.value,
                            StartTime:st.value,
                            EndTime:et.value,
                        };

                        var flag1=0;
                        
                        //Checking free time of interviwee on edited values
                        
                        for(var k=0;k<allitems.length;k++)
                        {

                                   if(allitems[k].Intervieweemail==body.Intervieweemail && allitems[k].id!=body.id)
                                  {
                              
            
                                         var st2=allitems[k].StartTime;
                                         st2=st2.replace(":",'');
     
                                          var ed2=allitems[k].EndTime;
                                         ed2=ed2.replace(":",'');
     
                                         st2=Math.floor(st2);
                                         ed2=Math.floor(ed2);
     
                                         var givensttime=body.StartTime;
                                         var givenentime=body.EndTime;;
     
                                         givensttime=givensttime.replace(":",'');
                                         givensttime=Math.floor(givensttime);
     
                                         givenentime=givenentime.replace(":",'');
                                         givenentime=Math.floor(givenentime);
     
                                        if((givensttime>=st2 && givensttime<=ed2) || (givenentime>=st2 && givenentime<=ed2) || (givensttime<st2 && givenentime>ed2))
                                        {
                                            flag1=1;
                                           alert('Timimgs Clash- Interviewee not available'); 
                                           
        
                                        }
                                   
            
                                   }
                        } 

                         //Checking free time of interviwer on edited values
                        
                        for(var m=0;m<allitems.length;m++)
                        {

                                   if(allitems[m].Intervieweremail==body.Intervieweremail && allitems[m].id!=body.id)
                                  {
                                     
            
                                         var st2=allitems[m].StartTime;
                                         st2=st2.replace(":",'');
     
                                          var ed2=allitems[m].EndTime;
                                         ed2=ed2.replace(":",'');
     
                                         st2=Math.floor(st2);
                                         ed2=Math.floor(ed2);
     
                                         var givensttime=body.StartTime;
                                         var givenentime=body.EndTime;;
     
                                         givensttime=givensttime.replace(":",'');
                                         givensttime=Math.floor(givensttime);
     
                                         givenentime=givenentime.replace(":",'');
                                         givenentime=Math.floor(givenentime);
     
                                        if((givensttime>=st2 && givensttime<=ed2) || (givenentime>=st2 && givenentime<=ed2) || (givensttime<st2 && givenentime>ed2))
                                        {
                                            flag1=1;
                                           alert('Timimgs Clash- Interviewer not available'); 
                                     
        
                                        }
                                    
            
                                   }
                        } 
                        
                        //Updating the values based on whether above conditions allow
                        
                        if(flag1==0)
                        {
                        alert("Interview Edited");
                        allitems[i]=body;
                       }
                        break;

                    }
                }
                   
                }
                localStorage.setItem("myobject",JSON.stringify(allitems));

             };

            

   


    });
     //Delete Function
      
    delbutton.addEventListener("click",function(){
        
             //Looping over all localstorage values to find the clicked elements and hence delete
        
             for(var i=0;i<allitems.length;i++){
                 if(allitems[i].id==id1){
           
                     allitems.splice(i,1);
                 }
             }
             localStorage.setItem("myobject",JSON.stringify(allitems));
            table.removeChild(row);
         

    });

    

  }
    
