import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { selectIsAuthUser } from '../../modules/authorization/authorizationSlice';

interface Props {
	children: React.ReactElement;
}

export const PrivateComponent = ({ children }: Props) => {
	const isAuthenticated = useAppSelector(selectIsAuthUser);
	console.log(isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/authorization" replace />;
	}

	return children;
};
