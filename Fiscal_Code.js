const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
consonent = letter => letter == 'a'||letter =='e'||letter =='i'||letter =='o'||letter =='u'||letter =='A'||letter =='E'||letter =='I'||letter =='O'||letter =='U' ?  false:  true
function fiscalCode(person) {
    nameresult = ''
    result = ''
    //name
    namecons = []
    namevow = []
    for (let i of person.name){
      if (consonent(i)===true){
        namecons.push(i.toUpperCase())
      }else{namevow.push(i.toUpperCase())}
    }
    if (namecons.length===3){
      for (let i in namecons){
      nameresult += namecons[i]
    }}else if (namecons.length>3){
      nameresult += namecons[0]+namecons[2]+namecons[3]
    }else if (namecons.length<3){
      for (let i in namecons){nameresult += namecons[i]}
      for (let j=0;j<(3-namecons.length);j++){nameresult += namevow[j]} 
      nameresult = nameresult.replace("undefined",'X')
    }
    surnameresult = ''
    //surname
    surnamecons = []
    surnamevow = []
    for (let i of person.surname){
      if (consonent(i)===true){
        surnamecons.push(i.toUpperCase())
      }else{surnamevow.push(i.toUpperCase())}
    }
    if (surnamecons.length>=3){
      for (let i=0;i<3;i++){
      surnameresult += surnamecons[i]
    }}else if (surnamecons.length<3){
      for (let i in surnamecons){surnameresult += surnamecons[i]}
      for (let j=0;j<(3-surnamecons.length);j++){surnameresult += surnamevow[j]} 
      surnameresult = surnameresult.replace(/undefined/g,'X')
    }
    const birth = person.dob.split('/')
    const year = birth[2].slice(-2)
    const month = months[birth[1]]
    const day = person.gender==='M'?('0'+birth[0]).slice(-2):String(parseInt(birth[0])+40)
    result = surnameresult+nameresult+year+month+day
    return result
  }
  console.log(fiscalCode({
    name: "Charan",
    surname: "Sridhara",
    gender: "M",
    dob: "14/10/2008"
  }))