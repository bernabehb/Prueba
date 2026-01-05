import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", envio: 80, entrega: 90 },
  { month: "Feb", envio: 60, entrega: 50 },
  { month: "Mar", envio: 70, entrega: 65 },
  { month: "Apr", envio: 40, entrega: 25 },
  { month: "May", envio: 65, entrega: 78 },
  { month: "Jun", envio: 45, entrega: 68 },
  { month: "Jul", envio: 48, entrega: 75 },
  { month: "Aug", envio: 55, entrega: 88 },
  { month: "Sep", envio: 58, entrega: 30 },
  { month: "Oct", envio: 50, entrega: 70 },
  { month: "Nov", envio: 65, entrega: 88 },
  { month: "Dec", envio: 75, entrega: 95 },
];

const EstadisticasGrafic = () => {
  return (
    <div className="card-section">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="section-title">Estadísticas de entrega</h2>
          <p className="text-sm text-gray-400">
            Número total de entregas 70.5K
          </p>
        </div>

        <select className="
          bg-transparent border border-gray-600
          text-sm px-3 py-1 rounded-md
          text-gray-300
        ">
          <option>Mensual</option>
          <option>Anual</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Bar dataKey="envio" fill="#c7d2fe" radius={[6, 6, 0, 0]} />
            <Bar dataKey="entrega" fill="#4f7cff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EstadisticasGrafic;