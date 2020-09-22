const wheels = {
    monocyle: 1,
    moto: 2,
    voiture: 4,
    limousine: 6
}

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
    return (
        nb_monocycle*wheels.monocyle
        + nb_moto*wheels.moto
        + nb_voiture*wheels.voiture
        + nb_limousine*wheels.limousine
    )
}

const garage1 = countWheels(10, 20, 7, 2)
const garage2 = countWheels(2, 3, 4, 5)

console.log(garage1, garage2)