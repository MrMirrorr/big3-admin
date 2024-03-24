import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { selectIsAuthUser } from '../../modules/authorization/authorizationSlice';

interface Props {
	children: React.ReactElement;
}

export const PrivateRoute = ({ children }: Props) => {
	const isAuthenticated = useAppSelector(selectIsAuthUser);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [isAuthenticated]);

	if (isLoading) {
		return null;
	}

	if (!isAuthenticated) {
		return <Navigate to="/auth/authorization" replace />;
	}

	return children;
};
