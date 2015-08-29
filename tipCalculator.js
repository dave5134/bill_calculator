<script>

  function tipCalculator()
  {
 var bill;
 var tipPercent;
 var tipAmount;
 var totalCost;
 
 
 bill = prompt("Please enter the amount of the bill " ");
 tipPercent= prompt("What percentage of bill would you like to tip ?", " " );
 
 tipAmount =  tipPercent / 100 ;
 
 totalCost = bill + tipAmount ;
 document.write("Thank You. Your total charge is ", totalCost , " . ");
 return;
 } 
  
 </script>
 
 
 