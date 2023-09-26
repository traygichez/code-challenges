const readLine=require('readline');


const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('enter marks',(grade)=>{
    calculateGrade(grade);
rl.close();
})


function calculateGrade(marks){
    
        if (marks>100){
            console.log('invalid marks');// if the marks inputted is more than one hundred,it returns "invalid marks"//
        }
        else if (marks >=79&&marks<=100){
            console.log("You have doe very well,you have scored an A");//if the marks attained is between 79 and 100,the grade to be outputted should be "A"//
        }else if(marks>=60&&marks<=79){
             console.log("very good continue with the same spirit ,you have scored B");//if the marks attained is between 60 and 79,the grade to be outputted should be "B"//
        }else if(marks>=49&&marks<=59){
            console.log("you can do better ,you have a C"); //if the marks attained is between 49 and 59,the grade to be outputted should be "C"//
        }else if(marks>=40&&marks<=49){
            console.log("you need to put moe effort ,you have scored a D"); //if the marks attained is between 40 and 49,the grade to be outputted should be "D"//
        }else{
            console.log("there is still room for improvement but you have scored an E"); //if the marks attained is less than 40 the grade to be outputted should be "E"//
        }
    } 
    
    