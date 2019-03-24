function fromRoman(str)
{
   if (str == null)
   {
       return -1;
   }
   let num = chartoint(str.charAt(0));
   let pre, cur;
   for (let i=1;i<str.length;i++)
   {
       cur= chartoint(str.charAt(i));
       pre= chartoint(str.charAt(i-1));
       if (cur <= pre)
       {
           num += cur;
       }
       else{
           num = num - pre*2 + cur;
       }
   }
   return num;
}
function chartoint (C)
{
    switch (C)
    {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default : return -1; 
    }
}
console.log (fromRoman('XXVI'));
console.log (fromRoman('CI'));

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    