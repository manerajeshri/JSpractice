class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR",50000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance",50000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finance",50000,"Infy");
const emp_monika =new Employee(77,"monika","IT",50000,"Wipro");
const emp_viny =new Employee(88,"vinayak","IT",50000,"TCS");
const emp_mahi =new Employee(99,"Mahesh","HR",50000,"Infy");

const array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`array_emps.length`,array_emps.length);

console.log(`              4]Average Salary of All employees `);
let sum=0;
const empSalary = array_emps.filter((empSal)=>{
       
           sum += empSal.emp_salary;
    
})
console.log(`Sum of all employee Salaries = ${sum}`);
console.log(`Average Salary of All employees = ${sum/array_emps.length}`);