// Завдання 1
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let strA1 = '',
    strA2 = '';

    function getRow(firstRow, secondRow) {
        for( let i = 0; i < firstRow.length; i++) {            
            if (firstRow.charAt(i) == 'а') {
                strA1 += i;
            }                
        }
        for( let i = 0; i < secondRow.length; i++) {            
            if (secondRow.charAt(i) == 'а') {
                strA2 += i;
            }                
        }
        return strA1.length > strA2.length ? firstRow : secondRow;        
    }
    
    console.log(getRow(firstRow, secondRow));




















