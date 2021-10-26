import { getKomaByName } from "master/koma"

type IKomaProps = {
  name: IKomaName
}

export const Koma: React.FC<IKomaProps> = (props) => {
  const { name } = props

  const koma = getKomaByName(name)
  return (
    <img src={koma.path} alt={koma.name} />
  )
}