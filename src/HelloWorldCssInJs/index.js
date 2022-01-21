import styled from 'styled-components';  //npm instal --save styled-components

const HelloWorldCssInJs = () => {

	const DivStyle = styled.div`
		color: orange;
		border: 3px solid #000;
	`;

	function HelloWorldComponent() {
		return (
			<div>
				<DivStyle>
					<h3>Componente: HelloWorldCssInJs</h3>
					<h4>Exemplo de Css in JS.</h4>
					Hello World
				</DivStyle>
			</div>
		)
	}


	return (
		<div>
			<p>Componente: HelloWorldCssInJss</p>
			<p>{HelloWorldComponent()}</p>
		</div>

	)
}

export default HelloWorldCssInJs;
