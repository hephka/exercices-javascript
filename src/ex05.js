const showStars = (nbStars) => {
    for (let e = '*'; e.length <= nbStars; e += '*') {
        console.log(e)
    }
}

showStars(3)

showStars(10)