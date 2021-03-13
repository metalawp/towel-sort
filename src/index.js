// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length == 0) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            i % 2 !== 0 ? matrix[i].reverse() : false;
        }
    }
    return matrix.join().split(",");
};
