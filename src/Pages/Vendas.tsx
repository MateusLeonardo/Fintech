import { useData } from "../Context/DataContext"

const Vendas = () => {
  const {data} = useData()

  if(data === null) return null;
  return (
    <ul>
      {data.map(venda => <li></li>)}
    </ul>
  )
}

export default Vendas