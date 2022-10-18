/**
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
    let rows = board.length, cols = board[0].length, count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === "X") {
                board[i][j] = ".";
                // 处理行
                for (let k = j + 1; k < cols && board[i][k] === "X"; k++) {
                    board[i][k] = ".";
                }
                // 处理列
                for (let k = i + 1; k < rows && board[k][j] === "X"; k++) {
                    board[k][j] = "."
                } 
                // 处理完一艘战舰后，让count+1
                count++;
            }
        }
    }
    return count;
};


const temp = Array.from({length : 10});
console.log(temp);  // [undefined, ... undefiend]   length == 10