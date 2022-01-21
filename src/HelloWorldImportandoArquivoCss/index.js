import './HelloWorldComponent.css';

const HelloWorldImportandoArquivoCss = () => {

	const divStyle = {
		color: 'brown',
		border: '3px solid #000'
	};

	function HelloWorldComponent() {
		return <div style={divStyle}>Hello World!</div>;
	}


	function HelloWorldComponent2() {
		return <div className="div-style-pink">Texto Estilizado Rosa</div>;
	}

	function HelloWorldComponent3() {
		return <div className="div-style-purple">Texto Estilizado Roxo</div>;
	}

	return (
		<div style={divStyle}>
			<p>Componente: HelloWorldImportandoArquivoCss</p>

			<p>{HelloWorldComponent()}</p>
			<p>{HelloWorldComponent2()}</p>
			<p>{HelloWorldComponent3()}</p>
		</div>

	)
}

export default HelloWorldImportandoArquivoCss;
