const makeUnique = (list) => {
    const res = []
    for (let i = 0; i <= list.length-1; i ++) {
        res.includes(list[i]) ? false : res.push(list[i])
    }
    return res
}

console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))