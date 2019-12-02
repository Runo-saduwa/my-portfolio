import React, { useContext} from 'react';
import './Form.css';
import { themeContext } from '../../Context';
const Form = () => {

	const {darkMode} = useContext(themeContext);
	return (
		<section className="contactFormSection">
			<h3>Get in Touch</h3>
			<p className={`defaultColor ${darkMode? "darkMode" : null}`}>Interested in working together or just have a question? Feel free to message me!</p>

			<form action="">
				<div className="inputContainer">
					<input type="text" name="name" placeholder="Name" id="" />
				</div>
				<div className="inputContainer">
					<input type="email" name="Email" placeholder="Email" id="" />
				</div>
				<div className="inputContainer">
					<textarea name="Message" id="" cols="30" rows="10" placeholder="Message" />
				</div>
                <button className={`defaultBtn ${darkMode? "darkMode" : null}`}>submit</button>
			</form>
		</section>
	);
};

export default Form;
