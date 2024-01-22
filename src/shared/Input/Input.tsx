import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Eye, EyeOff, X } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string,
	error?: string,
	togglePassword?: boolean,
	hasError?: boolean,
	onClear?: () => void,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			hasError,
			type = 'text',
			togglePassword,
			placeholder,
			onClear,
			value,
			...props
		},
		ref
	) => {
		const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type)

		const [isFocus, setIsFocus] = useState<boolean>(false)

		const handleOnBlur = () => {
			if (value === '') {
				setIsFocus(false)
			}
		}

		const handlePasswordType = () => {
			setInputType(inputType === 'text' ? 'password' : 'text')
		}

		return (
			<div className={clsx('input-line', className)}> 
				<label className={clsx('label', hasError && 'label--error')}>
					<span className={clsx('placeholder', isFocus && 'placeholder--focus')}>
						{placeholder}
					</span>
					<input
						{...props}
						className={clsx('input', isFocus && 'input--focus')}
						onBlur={handleOnBlur}
						onFocus={() => setIsFocus(true)}
						ref={ref}
						type={inputType}
						value={value}
					/>
				</label>
				{onClear && (
					<button
						className={clsx('btn', 'clear-btn', value && 'clear-btn--visible')}
						onClick={onClear}
						type="button"
					>
						<X color="#2a2a2e" />
					</button>
				)}
				{togglePassword && (
					<button
						className={clsx('btn', 'eye-btn')}
						onClick={handlePasswordType}
						type="button"
					>
						{inputType === 'text' ? <Eye color="#2a2a2e" /> : <EyeOff color="#2a2a2e" />}
					</button>
				)}
			</div>
		)
	}
)