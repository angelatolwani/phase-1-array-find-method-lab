// code your solution here

function superbowlWin(array) {
    const winningRecord = array.find(checkResult);
    if (winningRecord != null) {
        return winningRecord.year;
    } else {
        return undefined;
    }
};


function checkResult(record, index, array) {
    return (record.result === "W");
};