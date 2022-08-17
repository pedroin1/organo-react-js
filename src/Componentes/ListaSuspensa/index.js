import "./index.css";

function ListaSuspensa({ label, itens, campoAlterado, valor, obrigatorio }) {
	const alterarCampo = (evento) => {
		campoAlterado(evento.target.value);
	};

	return (
		<div className="lista-suspensa">
			<label>{label}</label>
			<select onChange={alterarCampo} value={valor} required={obrigatorio}>
				<option value="" disabled selected>
					Selecione seu time...
				</option>

				{/*iterando sobre minha lista de itens com MAP*/}
				{itens.map((item) => {
					return <option>{item}</option>;
				})}
			</select>
		</div>
	);
}

export default ListaSuspensa;
