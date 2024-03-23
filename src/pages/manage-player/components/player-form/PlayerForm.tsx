import { useNavigate } from 'react-router-dom';
import { useGetPositionsQuery } from '../../../../api/requests/player';
import { useGetAllTeamsQuery } from '../../../../api/requests/team';
import { teamFormValidation } from './playerFormValidation';
import { usePlayerForm } from '../../hooks/usePlayerForm';
import { ImageUpload, Preloader } from '../../../../components';
import { Button, Input } from '../../../../ui';
import { ControlledSingleSelect } from '../controlled-single-select/ControlledSingleSelect';
import { IOption } from '../../../../ui/sharedTypes';
import styles from './PlayerForm.module.scss';

export const PlayerForm = () => {
	const navigate = useNavigate();

	const { data: positions } = useGetPositionsQuery();
	const positionOptions: IOption<string>[] =
		positions?.map((p) => ({ value: p, label: p })) || [];

	const { data: teams } = useGetAllTeamsQuery('');
	const teamOptions: IOption<number>[] =
		teams?.data.map((t) => ({ value: t.id, label: t.name })) || [];

	const {
		register,
		handleSubmit,
		onSubmit,
		isLoading,
		errors,
		handleFileChange,
		previewUrl,
		control,
	} = usePlayerForm();

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
				<ControlledSingleSelect
					id="position"
					label="Position"
					control={control}
					rules={teamFormValidation.position}
					options={positionOptions}
					error={Boolean(errors.position)}
					errorMessage={errors.position?.message}
				/>
				<ControlledSingleSelect
					id="team"
					label="Team"
					control={control}
					rules={teamFormValidation.team}
					options={teamOptions}
					error={Boolean(errors.team)}
					errorMessage={errors.team?.message}
				/>
				<div className={styles.flex}>
					<Input
						type="number"
						label="Height (cm)"
						id="height"
						{...register('height', teamFormValidation.height)}
						error={Boolean(errors.height)}
						errorMessage={errors?.height?.message}
					/>
					<Input
						type="number"
						label="Weight (kg)"
						id="weight"
						{...register('weight', teamFormValidation.weight)}
						error={Boolean(errors.weight)}
						errorMessage={errors?.weight?.message}
					/>
				</div>
				<div className={styles.flex}>
					<Input
						type="date"
						label="Birthday"
						id="birthday"
						{...register('birthday', { ...teamFormValidation.birthday })}
						error={Boolean(errors.birthday)}
						errorMessage={errors?.birthday?.message}
					/>
					<Input
						type="number"
						label="Number"
						id="number"
						{...register('number', teamFormValidation.number)}
						error={Boolean(errors.number)}
						errorMessage={errors?.number?.message}
					/>
				</div>

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
