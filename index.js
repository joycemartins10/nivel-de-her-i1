let nome = (" flor do dia ")
let nivel = 10000

switch ( nivel) {
    case ( nivel <= 1000 ):
        console.log (" ferro ")
        break;

        case ( nivel >= 1001 <= 2000 ):
            console.log (" bronze ")
            break;

            case ( nivel >= 2001 <=5000 ):
                console.log (" prata ")
                break;

                case (nivel >= 5001 <= 7000 ):
                    console.log (" ouro ")
                    break;

                    case ( nivel >= 7001 <= 8000 ):
                        console.log (" platina diamante ")
                        break;

                        case ( nivel >=8001 <= 9000):
                            console.log (" ascendente ")
                            break;

                            case ( nivel >= 9001 <= 10000 ):
                                console.log (" imortal ")
                                break;

                                case ( nivel >= 10001 ):
                                    console.log (" radiante ")
                                    break;

                                    console.log (" O herói " + nome + "está no nivel de" + nivel)
}