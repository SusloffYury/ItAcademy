let data = {
  "Рыбы": ['Форель', 'Лосось'],
  "Деревья": ["секвойя", "дуб"],
  "Цветковые": ["яблоня","магнолия"]
};


  function tagCreat(obj){
  let array = Object.entries(obj);
     
    array.map((el)=>{
        ol = document.createElement('ol')
        ol.className = el[0] 
        ol.innerHTML = el[0]
          el[1].forEach(elem=>{
          let li = document.createElement('li')
           li.className = elem
           li.innerHTML = elem
           document.body.append(ol)
           ol.append(li)
          }) 
      })
     
 }
  

  tagCreat(data);