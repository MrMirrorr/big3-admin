import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { selectIsAuthUser } from '../../modules/authorization/authorizationSlice';

interface Props {
	children: React.ReactElement;
}

export const WithAuthCheck = ({ children }: Props) => {
	const isAuthenticated = useAppSelector(selectIsAuthUser);

	if (isAuthenticated) {
		return <Navigate to="/teams" replace />;
	}

	return children;
};
