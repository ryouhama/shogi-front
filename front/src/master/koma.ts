import Ou from 'img/shogi/1.png'
import Kaku from 'img/shogi/2.png'
import Hisya from 'img/shogi/3.png'
import Kin from 'img/shogi/4.png'
import Gin from 'img/shogi/5.png'
import Keima from 'img/shogi/6.png'
import Kyousya from 'img/shogi/7.png'
import Fu from 'img/shogi/8.png'

const KomaMaster: IKoma[] = [
    { name: '歩', path: Fu },
    { name: '香車', path: Kyousya },
    { name: '桂馬', path: Keima },
    { name: '銀', path: Gin },
    { name: '金', path: Kin },
    { name: '飛車', path: Hisya },
    { name: '角', path: Kaku },
    { name: '王', path: Ou }
]
export const getKomaByName = (name: IKomaName): IKoma => {
    const koma = KomaMaster.find((koma) => koma.name === name)
    if (!koma) {
        throw new Error('駒のマスターデータが壊れています')
    }
    return koma
}

export const getAllKomas = () => {
    return KomaMaster
}
