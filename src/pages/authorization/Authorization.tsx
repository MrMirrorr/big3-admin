import { AuthLayout, MainContainer } from '../../layouts';
import { AuthorizationForm } from './components/authorization-form/AuthorizationForm';
import { ReactComponent as Img } from '../../assets/icons/sign-in.svg';

export const Authorization = () => {
	return (
		<MainContainer>
			<AuthLayout form={<AuthorizationForm title="Sign In" />} img={<Img />} />
		</MainContainer>
	);
};
