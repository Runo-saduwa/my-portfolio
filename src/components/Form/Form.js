import React, {useState, useContext} from 'react';
import './Form.css';
import { themeContext } from '../../Context';
import axios from 'axios';
const Form = () => {

	const {darkMode} = useContext(themeContext);

	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	  });
	  const handleServerResponse = (ok, msg, form) => {
		setServerState({
		  submitting: false,
		  status: { ok, msg }
		});
		if (ok) {
		  form.reset();
		}
	  };

	  const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
		  method: "post",
		  url: "https://formspree.io/mvogdegp",
		  data: new FormData(form)
		})
		  .then(r => {
			handleServerResponse(true, "Thanks!", form);
		  })
		  .catch(r => {
			handleServerResponse(false, r.response.data.error, form);
		  });
	  };
	return (
		<section className="contactFormSection">
			<h3>Get in Touch</h3>
			<p className={`defaultColor ${darkMode? "darkMode" : null}`}>Interested in working together or just have a question? Feel free to message me!</p>

			<form onSubmit={handleOnSubmit}>
				<div className="inputContainer">
					<input type="text" name="name" placeholder="Name" id="" />
				</div>
				<div className="inputContainer">
					<input type="email" name="email" placeholder="Email" id="" />
				</div>
				<div className="inputContainer">
					<textarea name="Message" id="" cols="30" rows="10" placeholder="Message" />
				</div>
                <button disabled={serverState.submitting} className={`defaultBtn ${darkMode? "darkMode" : null}`} type="submit">submit</button>
				{serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
			</form>
		</section>
	);
};

export default Form;
