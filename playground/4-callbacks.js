
const add = ([...num], sum) => {
    setTimeout(() => {
        sum(num[0] + num[1]);
    }, (2000));
};


add([1, 2], (total) => {
    console.log(total);
});