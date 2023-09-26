function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATES=[
    {min:0,max:24000,rate:0.1},
    {min:24001,max:32333,rate:0.15},
    {min:32334,max:41067,rate:0.2},
    {min:41068,max:48719,rate:0.25},
    {min:48720,max:65833,rate:0.3},
    {min:65834,max:Infinity,rate:0.35},
    ];
    const NHIF_RATES=[150,300,400,500,600,750];
    const NSSF_EMPLOYEE_RATE=0.06
    const NSSF_EMPLOYER_RATE=0.06
    const grossSalary=basicSalary+benefits;
    let tax=0;
    for(const rate of TAX_RATES){
      if(grossSalary>=rate.min&&grossSalary<=rate.max){
        tax=rate.rate*(grossSalary-rate.min);
        break;
      }
    }
    
    let nhif=0;
    for(let a=0; a<NHIF_RATES.length; a++){ 
     if (grossSalary<=(a+1)*5000){
        nhif=NHIF_RATES[a];
        break;
     }
   }
const nssfEmployee=grossSalary* NSSF_EMPLOYEE_RATE;
const nssfEmployer=grossSalary* NSSF_EMPLOYER_RATE;

const netSalary=grossSalary-tax-nhif-nssfEmployee;
return{
    grossSalary,
    tax,
    nhif,
    nssfEmployee,
    nssfEmployer,
    netSalary
   };
 }
const basicSalary=15000;
const benefits=2000;
const salaryDetails=calculateNetSalary(basicSalary,benefits);
console.log('Salary Details:', salaryDetails);