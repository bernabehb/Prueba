const SeguimientoCard = () => {
  return (
    <div className="card-section">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="section-title">Seguimiento de la entrega</h2>
          <p className="text-sm text-gray-400">
            Último historial de entregas visto
          </p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden mb-4">
        <iframe
          title="map"
          className="w-full h-40"
          src="https://maps.google.com/maps?q=25.7251077,-100.3340362&z=13&output=embed"
        />
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400">ID de seguimiento</p>
        <p className="font-semibold text-gray-500 dark:text-gray-400">#5W5H1-AA6YW</p>
        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-emerald-600/20 text-emerald-400">
          En tránsito
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-300">
          <span>Recogido</span>
          <span>12:54</span>
        </div>
        <div className="flex justify-between text-blue-400">
          <span>En tránsito</span>
          <span>12:58</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Entregado</span>
          <span>---</span>
        </div>
      </div>
    </div>
  );
};

export default SeguimientoCard;
