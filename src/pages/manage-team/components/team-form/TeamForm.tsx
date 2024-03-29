import { useNavigate } from 'react-router-dom';
import { ImageUpload, Preloader } from '../../../../components';
import { Button, Input } from '../../../../ui';
import { teamFormValidation } from './teamFormValidation';
import { useTeamForm } from '../../hooks/useTeamForm';
import styles from './TeamForm.module.scss';

export const TeamForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		onSubmit,
		isLoading,
		errors,
		handleFileChange,
		previewUrl,
	} = useTeamForm();

	return isLoading ? (
		<Preloader />
	) : (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.left}>
				<ImageUpload
					id="image"
					{...register('imageFile')}
					previewUrl={previewUrl || null}
					error={Boolean(errors.imageFile)}
					errorMessage={errors?.imageFile?.message}
					onChange={handleFileChange}
				/>
			</div>
			<div className={styles.right}>
				<Input
					type="text"
					label="Name"
					id="name"
					{...register('name', teamFormValidation.name)}
					error={Boolean(errors.name)}
					errorMessage={errors?.name?.message}
				/>
				<Input
					type="text"
					label="Division"
					id="division"
					{...register('division', teamFormValidation.division)}
					error={Boolean(errors.division)}
					errorMessage={errors?.division?.message}
				/>
				<Input
					type="text"
					label="Conference"
					id="conference"
					{...register('conference', teamFormValidation.conference)}
					error={Boolean(errors.conference)}
					errorMessage={errors?.conference?.message}
				/>
				<Input
					type="number"
					label="Year of foundation"
					id="year"
					{...register('year', teamFormValidation.year)}
					error={Boolean(errors.year)}
					errorMessage={errors?.year?.message}
				/>

				<div className={styles.controls}>
					<Button
						type="button"
						variant="secondary"
						disabled={isLoading}
						onClick={() => navigate(-1)}
					>
						Cancel
					</Button>
					<Button type="submit" disabled={isLoading}>
						Save
					</Button>
				</div>
			</div>
		</form>
	);
};
