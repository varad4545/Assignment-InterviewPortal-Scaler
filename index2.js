var allitems=localStorage.getItem('myobject');
var container=document.getElementById('container');

var eminterviewee=document.getElementById('iwemail1');
var eminterviewer=document.getElementById('iremail1');
var st=document.getElementById('st-time1');
var et=document.getElementById('end-time1');
var subedbtn=document.getElementById('subeditbtn')
container.style.display='none';
if(allitems==null){
    allitems=[];
}
else{
    allitems=JSON.parse(allitems);
}
var table=document.querySelector(".table");

  allitems.forEach(function(value){
      addElementotable(value);
  })
  function addElementotable(value){
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
    editbutton.addEventListener('click',function(){
        container.style.display='block';
        var insidecontainer=container.children;
     
            
             eminterviewee.value=value.Intervieweemail;
          
             eminterviewer.value=value.Intervieweremail;

             st.value=value.StartTime;
     
             et.value=value.EndTime;
              
  
             subedbtn.onclick=function(){
             
                if(st.value>=et.value){
                    alert("Start time should be less than End time");
                }
                else{
                for(var i=0;i<allitems.length;i++){


                    if(allitems[i].id==id1){
                        var body={
                            id:id1,
                            Intervieweemail:eminterviewee.value,
                            Intervieweremail:eminterviewer.value,
                            StartTime:st.value,
                            EndTime:et.value,
                        };

                        var flag1=0;
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
    delbutton.addEventListener("click",function(){
        
             
             for(var i=0;i<allitems.length;i++){
                 if(allitems[i].id==id1){
           
                     allitems.splice(i,1);
                 }
             }
             localStorage.setItem("myobject",JSON.stringify(allitems));
            table.removeChild(row);
         

    });

    

  }
    