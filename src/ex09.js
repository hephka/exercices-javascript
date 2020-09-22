const biggest = (list) => {
    return list.length > 0 ? Math.max(...list) : undefined
}

console.log(biggest([99, 100, 101, 1]))