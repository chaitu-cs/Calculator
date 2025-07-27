const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');

buttons.forEach( (item) => {
    item.onclick = () => {
        try{
            switch(item.dataset.button)
            {
                case 'C':
                display.value = '';
                break;

                case 'CE':
                display.value = display.value.slice(0, -1);
               
                case '=':
                    display.value = eval(display.value);
                    break;

                default:
                    display.value += item.dataset.button;
                    break;
                
            }
        }catch(e) {
            display.value = 'Error';
            setTimeout( () =>  (display.value = ''), 1000);
        }

           
        
    }
})
   
