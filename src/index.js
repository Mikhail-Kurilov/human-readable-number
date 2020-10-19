module.exports = function toReadable (number) {
    let decimal = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDecimal = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return decimal[0];
    }
    const arr = [];
    const h = Math.floor(number / 100);
    const d = Math.floor((number - h*100) / 10);
    const m = Math.floor(number - h*100 - d*10);

    if (h > 0) {
        arr.push(decimal[h] + ' hundred');
    }
    if (d > 0) {
        if (d == 1) {
            arr.push(twoDecimal[m]);
        }
        else {
            arr.push(dozens[d-2]);
            if (m > 0) {
                arr.push(decimal[m]);
            }
        }
    } else if (m > 0) {
        arr.push(decimal[m]);
    }
    return arr.join(' ');
}
