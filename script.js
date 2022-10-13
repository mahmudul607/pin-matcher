//Get 4 Digits Pin

document.getElementById('creatPin').addEventListener('click', function(){
   var val = Math.round(1000 + Math.random() * 9000);
   const previousShowPinNum=0;
   const newShowPinNum=val+previousShowPinNum;
   document.getElementById('seePin').value=newShowPinNum;

})

//Take inPut from Number Button

// function clickNumberButton(id,text){
//    document.getElementById(id).addEventListener('click', function(){
//       const previousNum=0;
//       console.log(previousNum);
//       const newNum=previousNum+text;
//      document.getElementById('numIputField').value=newNum;
//    })
// }


// clickNumberButton('one', 1);

// clickNumberButton('two', 2);
// clickNumberButton('three', 3);

// clickNumberButton('four', 4);
// clickNumberButton('five', 5);

// clickNumberButton('six', 6);
// clickNumberButton('seven', 7);

// clickNumberButton('eight', 8);
// clickNumberButton('nine', 9);



document.getElementById('itemDiv').addEventListener('click',function(event){
   const number=event.target.innerText;
   console.log(number);
   const seeTypedNum=document.getElementById('numIputField');

   if(isNaN(number)){
      if(number=='C'){
         seeTypedNum.value="";
      }
      if(number=='<'){
         numIputField.value=numIputField.value.slice(0,-1);
      }
   
     
      
      
   }
   else{
      const previousNumber=seeTypedNum.value;
      const newNumber=previousNumber+number;
      seeTypedNum.value=newNumber;
      // console.log(seeTypedNum);
   }


  
   
});

function getVerification(){
   const pin=document.getElementById('seePin').value;
   // console.log(pin);
   const typedNumber=document.getElementById('numIputField').value;
   // console.log(typedNumber);
   const successMessage=document.getElementById('notify-success');
   console.log(successMessage);
   const failMessage=document.getElementById('notify-fail');
   // console.log(failMessage);
   if(pin==typedNumber){
      successMessage.style.display ='block';
      failMessage.style.display ='none';

   }
   else{
      successMessage.style.display ='none';
      failMessage.style.display ='block';
   }
   clickFunc();
}


var count = 3;
function clickFunc() {
count -= 1;
var click = document.getElementById('count-click').innerHTML = count;

console.log(click);
var btn = document.getElementById('btn-submit');

if(click == 0){
   btn.disabled = true;
   
} 

  
}

