import "./index.css";

function CampoTexto({ obrigatorio, label, placeholder, campoAlterado, valor }) {
	const alterarCampo = (evento) => {
		campoAlterado(evento.target.value);
	};

	return (
		<div className="campo-texto">
			<label>{label}</label>
			<input
				onChange={alterarCampo}
				value={valor}
				required={obrigatorio}
				placeholder={placeholder}
			/>
		</div>
	);
}
export default CampoTexto;
