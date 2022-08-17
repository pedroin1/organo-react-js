import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { useState } from "react";
import "./index.css";
import ListaSuspensa from "../ListaSuspensa";

function Formulario({ usuarioSalvo, times }) {
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");

	function limparCampos() {
		setNome("");
		setCargo("");
		setImagem("");
		setTime("");
	}

	const salvar = (evento) => {
		evento.preventDefault();
		console.log("Salvou o formulario // DADOS:", nome, cargo, imagem, time);
		usuarioSalvo({ nome, cargo, imagem, time });
		limparCampos();
	};

	return (
		<section className="formulario">
			<form onSubmit={salvar}>
				<h2>Preencha os dados para criar card do colaborador</h2>
				<CampoTexto
					obrigatorio={true}
					label="Nome"
					placeholder="Digite o seu nome..."
					valor={nome}
					campoAlterado={(valor) => setNome(valor)}
				/>
				<CampoTexto
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite o seu cargo..."
					valor={cargo}
					campoAlterado={(valor) => setCargo(valor)}
				/>
				<CampoTexto
					label="Imagem"
					placeholder="Digite o endereço da sua imagem..."
					valor={imagem}
					campoAlterado={(valor) => setImagem(valor)}
				/>
				<ListaSuspensa
					obrigatorio={true}
					label="Times"
					itens={times}
					valor={time}
					campoAlterado={(valor) => setTime(valor)}
				/>
				<Botao label="Criar Card" />
			</form>
		</section>
	);
}

export default Formulario;
