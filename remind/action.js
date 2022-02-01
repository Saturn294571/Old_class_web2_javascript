function nightDayHandler(self){
   var background = document.querySelector('body');
   var everyLinkList = document.querySelectorAll('a');
   var i = 0;
   if (self.value == 'night') {
       background.style.backgroundColor = 'black'
       background.style.color = 'white'
       self.value = 'sunset'
       while(i<everyLinkList.length){
        everyLinkList[i].style.color = 'aqua'
        i++
       };
    } else if(self.value == 'sunset'){
        background.style.backgroundColor = 'orange'
        background.style.color = 'white'
        self.value = 'day'
        while(i<everyLinkList.length){
            everyLinkList[i].style.color = 'darkred'
            i++
           };
     } else {
        background.style.backgroundColor = 'white'
        background.style.color = 'black'
        self.value = 'night'
        while(i<everyLinkList.length){
            everyLinkList[i].style.color = 'blue'
            i++
           };
     }
};