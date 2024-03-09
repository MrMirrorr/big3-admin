import { AuthLayout, MainContainer } from '../../layouts';
import { RegistrationForm } from './components/registration-form/RegistrationForm';
import { ReactComponent as Img } from '../../assets/icons/sign-up.svg';

export const Registration = () => {
	return (
		<MainContainer>
			<AuthLayout form={<RegistrationForm title="Sign Up" />} img={<Img />} />
		</MainContainer>
	);
};
