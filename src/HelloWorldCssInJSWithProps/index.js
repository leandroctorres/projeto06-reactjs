import styled from 'styled-components';  //npm instal --save styled-components

const HelloWorldCssInJSWithProps = () => {

	const DivStyle = styled.div`
		color: ${props => props.color};
		border: 3px solid #000;
		background-color: yellow;
	`;

	function HelloWorldComponent() {
		const cor = 'green';
		return (
			<div>
				<DivStyle color={cor}>
					<h3>Componente: HelloWorldCssInJSWithProps</h3>
					<h4>Exemplo de Css in JS, usando props.</h4>
					Hello World
				</DivStyle>
			</div>
		)
	}


	return (
		<div>
			<p>Componente: HelloWorldCssInJSWithProps</p>
			<p>{HelloWorldComponent()}</p>
		</div>

	)
}

export default HelloWorldCssInJSWithProps;
