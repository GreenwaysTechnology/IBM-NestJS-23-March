//interface based inheritance
//interface will not have any implementation only declaration
interface Account {
    //declaration
    withdraw(): number
    deposit(amount: number): number
}
class SavingsAccount implements Account {
    constructor() {

    }
    withdraw(): number {
        return 1000
    }
    deposit(amount: number): number {
        return amount
    }
}
function main(){
  let sb = new SavingsAccount()
  console.log(sb.withdraw(),sb.deposit(12));
  
}
main()
