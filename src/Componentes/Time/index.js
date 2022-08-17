import CardColaborador from "../CardColaborador";
import "./index.css";

function Time({ nome, corPrimaria, corSecundaria, colaboradores }) {
	//pegando o estilo via prop
	const estiloPrimario = { borderColor: corPrimaria };
	const estiloSecundario = { backgroundColor: corSecundaria };
	return (
		//verficando se aquele time tem colaboradores, se te vier gera o componente de time - renderizaçao condicional
		colaboradores.length > 0 && (
			<section className="time" style={estiloSecundario}>
				<h3 style={estiloPrimario}>{nome}</h3>;
				<div className="colaboradores">
					{colaboradores.map((colaborador) => {
						return (
							<CardColaborador
								key={colaborador.nome}
								nome={colaborador.nome}
								cargo={colaborador.cargo}
								imagem={colaborador.imagem}
								corDeFundo={corPrimaria}
							/>
						);
					})}
				</div>
			</section>
		)
	);
}

export default Time;
