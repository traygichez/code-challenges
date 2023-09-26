const readLine=require('readline')
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('enter speed',(input)=>{
    const speed = input;
speedDetector(speed);
rl.close();
})

function speedDetector(speed){
    const speedLimit=70; //this shows that the speed limit 70 is constant,therefore does not change//

    let demerit=0;
    if (speed<70){
        console.log('OK');//executes that if the speed is more than 70 it should return the word "OK"//
    }
    else{
        excessSpeed=speed-speedLimit; //this calculates excess speed by minusing the initial speed and the speed limit//
             demerit=excessSpeed/5; //in norder to get the demerit points ,we divie escess speed by 5//
                if (demerit>12){
                   console.log("Licence suspended");//indicates that if the calculated demerit is more than 12points ,it should return "licence suspended"//
        }
                else{
                     console.log(`demeritPoints${demerit}`);//indicates that if the demerit points is any number less than 12 it should output the points//
        }
    }
}
