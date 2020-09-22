const count = (min, max, step) => {
    for (let n = min; n <= max; n += step) {
        console.log(n)
    }
    /* let n = min;
while (n <= max) {
  console.log(n);
  n += step;
} */
}

count(0, 100, 4)