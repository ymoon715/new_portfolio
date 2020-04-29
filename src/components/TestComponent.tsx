import React, {Component} from 'react';



class TestComponent extends Component<{
	title: string,
	name: string,
	age: number,
	covid: boolean,
	someotherProp?: string
}> {
	render() {
		const {title, name, age, covid, someotherProp} = this.props;
		return (
			<div>
				<ul>
					<li>
						title: {title}
					</li>

					<li>
						name: {name}
					</li>

					<li>
						age: {age}
					</li>

					<li>
						covid: {covid}
					</li>
					<li>
						someotherProp: {someotherProp}
					</li>
				</ul>
			</div>
		)
	}
}

export default TestComponent