

//Code To get Input elements of Interview

var iwemail=document.querySelector("#iwemail");
var iremail=document.querySelector("#iremail");
var startime=document.querySelector("#st-time");
var endtime=document.querySelector("#end-time");
var myForm=document.querySelector("#my-form");
var msg=document.querySelector(".msg");
var msgbef=document.querySelector(".msgbef");
var limitmsg = document.createElement("text");





myForm.addEventListener('submit', onSubmit);

//access local storage

 var ide=localStorage.getItem('id');
 if(ide==null){
    ide=0;
}
 else{
     ide=JSON.parse(ide);
 }

function onSubmit(e)
{
    if(iwemail.value!='' && iremail.value!='' && startime.value!='' && endtime.value!=''){

        //converting time in string to number for comparison
     
        mockendtime=endtime.value;
        mockstarttime=startime.value;

        mockendtime=mockendtime.replace(':','');
        mockstarttime=mockstarttime.replace(':','');

        mockendtime=Math.floor(mockendtime);
        mockstarttime=Math.floor(mockstarttime);
        if(mockstarttime<mockendtime)
        
        {

           //creating an object
         
            var obj1={
               id:ide,
               Intervieweemail:iwemail.value,
                Intervieweremail:iremail.value,
               StartTime:startime.value,
               EndTime:endtime.value,
           };
         
    //Getting localstorage in form of arrray
         
    var allitems=localStorage.getItem('myobject');
    if(allitems==null){
          allitems=[];
    }
    else{
        allitems=JSON.parse(allitems);

    }
    if(allitems.length<=1){
        var limitmsg=document.createElement('text');
        limitmsg.classList.add('error1');
        alert('Add Atleast 3 Interviews');
       
    }
  
   
    ide=ide+1;
    var flag=1;
    var len1=allitems.length;

   //Checking whether Interviwee is free in input time
         
    for(var i=0;i<len1;i++)
    {
        if(allitems[i].Intervieweemail==obj1.Intervieweemail)
        {
            
            var st2=allitems[i].StartTime;
           st2=st2.replace(":",'');
     
           var ed2=allitems[i].EndTime;
           ed2=ed2.replace(":",'');
     
           st2=Math.floor(st2);
           ed2=Math.floor(ed2);
     
            var givensttime=obj1.StartTime;
            var givenentime=obj1.EndTime;;
     
            givensttime=givensttime.replace(":",'');
             givensttime=Math.floor(givensttime);
     
            givenentime=givenentime.replace(":",'');
            givenentime=Math.floor(givenentime);
     
            if((givensttime>=st2 && givensttime<=ed2) || (givenentime>=st2 && givenentime<=ed2) || (givensttime<st2 && givenentime>ed2)){
               flag=0;
                alert('Timimgs Clash- Interviewee not available'); 
            }
            else{
                console.log("Interview can be scheduled");
            }
            
        }
    } 
   
     //Checking whether Interviwer is free in input time
         
    for(var j=0;j<len1;j++)
    {
        if(allitems[j].Interviewermail==obj1.Interviewermail)
        {
            
            var st2=allitems[j].StartTime;
           st2=st2.replace(":",'');
     
           var ed2=allitems[j].EndTime;
           ed2=ed2.replace(":",'');
     
           st2=Math.floor(st2);
           ed2=Math.floor(ed2);
     
            var givensttime=obj1.StartTime;
            var givenentime=obj1.EndTime;;
     
            givensttime=givensttime.replace(":",'');
             givensttime=Math.floor(givensttime);
     
            givenentime=givenentime.replace(":",'');
            givenentime=Math.floor(givenentime);
     
            if((givensttime>=st2 && givensttime<=ed2) || (givenentime>=st2 && givenentime<=ed2) || (givensttime<st2 && givenentime>ed2)){
               flag=0;
                alert('Timimgs Clash- Interviewer not available'); 
            }
            else{
                console.log("Interview can be scheduled");
            }
            
        }
    }
         
    //Adding interview to localstorage based on the change of flag value(based on free time from interviewee and interviewer)

    if(flag==1){
    allitems.push(obj1);

     localStorage.setItem("id",JSON.stringify(ide));
    localStorage.setItem("myobject",JSON.stringify(allitems));

      alert("Interview Scheduled");
    }
  
}
else{
    alert("Startime should be less than End time");
}

    // }
}

else{
    alert("Enter valid Details");
}

}

