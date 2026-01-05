const EtiquetaEstado = ({ status }) => {
  const statusNormalized = status.toLowerCase();

  const statusClass =
    statusNormalized === 'entregado' || statusNormalized === 'activo'
      ? 'status-activo'
      : statusNormalized === 'en tránsito' || statusNormalized === 'en transito'
      ? 'status-transito'
      : 'status-inactivo';

  return <span className={statusClass}>{status}</span>;
};

export default EtiquetaEstado;
