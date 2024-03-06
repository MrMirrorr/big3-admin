import { useState } from 'react';
import { Input } from './ui/input/Input';
import { Button } from './ui/button/Button';

export const App = () => {
	const [value, setValue] = useState('');

	return (
		<div>
			<h1>App</h1>
			<Input
				onChange={(e) => setValue(e.target.value)}
				type="password"
				value={value}
				label="Login"
				id="login"
				error={true}
				errorMessage="Required"
			/>
			<Button>Sign In</Button>
			<br />
			<Button variant="secondary" disabled>
				Cancel
			</Button>
			<br />
			<Button>Add +</Button>
		</div>
	);
};
