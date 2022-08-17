import { useState } from "react";
import Banner from "./Componentes/Banner/Banner";
import Formulario from "./Componentes/Fomulario";
import Time from "./Componentes/Time";

function App() {
	//LISTA de times com cores
	const listaDeTimes = [
		{
			nome: "Programação",
			corPrimaria: "#57C278",
			corSecundaria: "#D9F7E9",
		},

		{
			nome: "Front-End",
			corPrimaria: "#82CFFA",
			corSecundaria: "#E8F8FF",
		},
		{
			nome: "Data Sciense",
			corPrimaria: "#A6D157",
			corSecundaria: "#F0F8E2",
		},
		{
			nome: "Devops",
			corPrimaria: "#E06B69",
			corSecundaria: "#FDE7E8",
		},
		{
			nome: "Design",
			corPrimaria: "#D86EBF",
			corSecundaria: "#FAE95F5",
		},
		{
			nome: "Mobile Developer",
			corPrimaria: "#FEBA05",
			corSecundaria: "#FFF5D9",
		},
		{
			nome: "Inovação e Gestão",
			corPrimaria: "#FF8A29",
			corSecundaria: "#FFEEDF",
		},
	];

	const [usuarios, setUsuarios] = useState([]);

	const salvarUsuarios = (usuario) => {
		console.log(usuario);

		//setando todos os usuarios salvos(usuarios) e adicionando um novo usuario
		setUsuarios([...usuarios, usuario]);
	};

	return (
		<div className="App">
			<Banner />
			<Formulario
				usuarioSalvo={(usuario) => salvarUsuarios(usuario)}
				//passando apenas o nome da lista de times pro form via map
				times={listaDeTimes.map((time) => {
					return time.nome;
				})}
			/>

			{listaDeTimes.map((time) => {
				return (
					<Time
						key={time.nome}
						nome={time.nome}
						corPrimaria={time.corPrimaria}
						corSecundaria={time.corSecundaria}
						//usando filter para separar os ususarios por time
						colaboradores={usuarios.filter(
							(colaborador) => colaborador.time === time.nome
						)}
					/>
				);
			})}
		</div>
	);
}

export default App;
