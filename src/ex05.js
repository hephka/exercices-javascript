const showStars = (nbStars) => {
    
    /* for (let e = '*'; e.length <= nbStars; e += '*') {
        console.log(e)
    } */
    for ( let i = 0; i <= nbStars; i += 1) {
        console.log('*'.repeat(i))
    }
}

showStars(3)

showStars(10)