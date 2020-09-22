const sumRec = (count = 0) => {
    if (count < 1000) {
        sumRec(count++)
    } else {
        break
    }
}

console.log(sumRec())

// Migraine