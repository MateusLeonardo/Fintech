import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../Context/DataContext";

const dadosGrafico = [
  {
    data: "2023-05-03",
    pago: 300,
    processando: 300,
    falha: 2000,
  },
  {
    data: "2023-05-04",
    pago: 35000,
    processando: 310,
    falha: 2300,
  },
  {
    data: "2023-05-05",
    pago: 350,
    processando: 410,
    falha: 3300,
  },
];

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend/>
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3}/>
        <Line type="monotone" dataKey="processando" stroke="#fbcb21" strokeWidth={3}/>
        <Line type="monotone" dataKey="falha" stroke="#000000" strokeWidth={3}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
