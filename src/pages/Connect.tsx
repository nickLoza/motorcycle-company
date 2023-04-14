import Helmet from "../components/helmet"

function Connect() {
	return (
		<Helmet title="connect">
		<div className="connect">
			<h1 className="connect__title">Connect with us</h1>
			<form className="connect__form">
				<div className="connect__form-input-field input-field">
					<label className="input-field__label">Name</label>
					<input className="input-field__input" type="text" required/>
				</div>
				<div className="connect__form-input-field input-field">
					<label className="input-field__label">Email</label>
					<input className="input-field__input" type="email" required/>
				</div>
				<div className="connect__form-input-field input-field">
					<label className="input-field__label">Country</label>
					<input className="input-field__input" type="text" required/>
				</div>
				<input 
					className="connect__form-submit" 
					type="submit" 
					value="SEND"/>
			</form>
		</div>
		</Helmet>
	)
}

export default Connect