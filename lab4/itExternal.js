        let num1 =10;
        let num2 ="22";
        let num3=null;
        let intnum;
        let sum;
        let x;

         document.write("<h3> the x is :"+  x + " </h3>");
      
         document.write("<h3> Original num2 is:" + num2 + "</h3>");
        

        function convertNum2(){
            intnum = Number(num2);
            document.write("<h3> The num2 after converting to number is:" + intnum + "</h3>");
        }

        function calculateSum(){
            sum = num1 + intnum;
            document.write("<h3> The summation of two numbers is:" + sum + "</h3>");
        }

        function calculateSum2(){
            sum2 = num1 + num3;
            document.write("<h3> The summation of two numbers is:" + sum2 + "</h3>");
        }
        function mulitiple(){
          multi=num1*x;
          document.write("<h3> The multiple of two numbers is:" + multi + "</h3>");
        }
    
      
        convertNum2();
        calculateSum();
        calculateSum2();
        mulitiple();
