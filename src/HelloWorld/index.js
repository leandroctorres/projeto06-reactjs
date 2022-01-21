const HelloWorld = () => {

	const divStyle = {
		color: 'blue'
	};

	function HelloWorldComponent() {
		return <div style={divStyle}>Hello World!</div>;
	}

	return (
		<div>
			Componente: HelloWorld
			<p>{HelloWorldComponent()}</p>
		</div>

	)
}

export default HelloWorld;
