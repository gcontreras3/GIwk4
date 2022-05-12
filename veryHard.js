console.log("VeryHard.js")

/*
    *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1

Note: You may assume that you have an infinite number of each kind of coin.
*/
let amount = 11;
let array = [1,2,5]
const howManyCoins = function(coins, target) {
    let biggestNum;
    let counter = 0;
    while(amount > 0){
        biggestNum = Math.max(...coins);
        if(biggestNum > amount) {
            coins = coins.filter(function(removing){
                return removing !== biggestNum;
            });
            if (coins.length == 0) {
                return -1;
            }
        } else {
            amount -= biggestNum;
            counter++;
        }
        console.log(coins);
    }
    return counter;
}
console.log(howManyCoins(array, amount));
















