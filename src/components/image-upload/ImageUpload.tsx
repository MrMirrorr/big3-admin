import { forwardRef } from 'react';
import { ReactComponent as AddPhotoIcon } from '../../assets/icons/add_a_photo.svg';
import styles from './ImageUpload.module.scss';

interface Props {
	id: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	errorMessage?: string;
	previewUrl: string | null;
}

export const ImageUpload = forwardRef<HTMLInputElement, Props>(
	({ id, onChange, previewUrl, error, errorMessage }: Props, ref) => {
		return (
			<>
				<label className={styles.maskImg} htmlFor={id}>
					<input ref={ref} type="file" id={id} onChange={onChange} />
					{previewUrl && <img src={previewUrl} alt="Preview" />}
					<AddPhotoIcon className={styles.addPhotoImg} />
				</label>
				{error && <div className={styles.errorMsg}>{errorMessage}</div>}
			</>
		);
	},
);
