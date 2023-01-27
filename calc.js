// CALCULATOR in ~200 lines of spaghetti


const tB = document.querySelector('.teks');
const ravno = document.querySelector('.ravn');
const ac = document.querySelector('.AC');
const PM = document.querySelector('.PM');

flag =0

 
function operate(are){
  
  [eno,op,dve] =are 
  eno =parseFloat(eno)
  dve = parseFloat(dve)
 

  if(op == '+'){
    return eno+dve
  }
  if (op == '-'){
    return eno - dve
  }
  if(op == '/'){
    return eno/dve
  }
  if(op == 'x'){
    return eno*dve
  }

}

function AC(){
  clearDisp()
  plc = null
  previous =[null]
}

  function getDisp(){
    return parseFloat(tB.value.substring(0,9))
  }

  function clearDisp(){
    tB.value = ''
  }

function chek(){
  if(previous.length==3)
    
    return true
  else 
    return false
  
}



  function General(){
    plc  = null
    previous =[]
   
    btns =document.querySelectorAll("button")
   
    btns.forEach(el => {
      if(el.innerText != '=' && el.innerText != "AC" && el.innerText!='+/-'){
        
        el.onclick = ()=>{
        btns[14].disabled =false
        if(el.className != 'operator') {

          if(flag){
            tB.value =''
          }

          //disable '.' after pressing it once
          tB.value = tB.value.substring(0,9) + el.innerText
          if(tB.value.includes('.')){
            btns[14].disabled = true 
          }
         
        

          flag =0

          previous[2] = getDisp()
          
          
        }
     

        else if(el.className == 'operator'){
         

          if(chek()){
            plc = operate(previous)
            
          }
        
          
          previous = [null]

        
          if(plc == null){
          previous[0] =  parseFloat(tB.value.substring(0,9))
          }
          else if (plc != null){
          previous[0] = plc
          }

          
          clearDisp()
          ope = el.innerText
          
          previous[1] = ope
          
         
            
        } 

        
      }}
  })
}
  ravno.onclick =()=>{
    //stuff...
    btns[14].disabled = false
    console.log(previous)
    console.log(plc)
    //preventing problems arising from only one operand or operand and 
    if(previous[0]==null || previous.length==2){
      tB.value =''
    }

    
    else if(previous[2] ==0){
      tB.value = 'error'
    }



    else{
        oshte = `${operate(previous)}`
       if(oshte.length>8){
          tB.value = oshte.substring(0,8)
    }
       else{
          tB.value = oshte}
    }


    previous = [null]
    flag = 1
    plc =null

  }

  ac.onclick =()=> AC()
  PM.onclick=()=>{
    flag =0
    if(tB.value.includes('-')){
      tB.value = tB.value.replace('-','')
    }
    else{
    tB.value = '-'+tB.value}
    
  }
  General()