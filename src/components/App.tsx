import { Field, Form, FormRenderProps } from 'react-final-form';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { CallbackCreditCardTypes, StoreDataCardType } from '../types';
import { SimpleCard } from './Card';
import {
	formatCreditCardNumber,
	formatCVC,
	formatExpirationDate,
} from '../utils/index';
import { PaymentSuccess } from './PaymentSuccess';
import { Messege } from './Messege';

import Styles from '../styles/Styles';

export const App: FC = () => {
	const [stateOfCard, setStateOfCard] = useState<StoreDataCardType[]>([]);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [checkSucccess, setCheckSuccess] = useState<boolean | undefined>(
		undefined
	);

	useEffect(() => {
		axios
			.get('https://mocki.io/v1/a5ae8585-b42d-486b-a4ff-25ebfebbaddf')
			.then(({ data }) => setStateOfCard(data))
			.catch((err) => console.log('Error fetching data', err));
	}, []);

	const onSubmit = async (values: any) => {
		setIsSubmitting(true);
		await new Promise((r) => setTimeout(r, 2000));
		const checkCardValues = stateOfCard?.some(
			(card) => card.number === values.number
		);
		setCheckSuccess(checkCardValues);
		setIsSubmitting(false);
	};

	// const handleCallbackCard = ({ issuer }: CallbackCreditCardTypes) => {
	// 	if (issuer !== 'visa' && issuer !== 'mastercard') {
	// 		return alert('We accept only visa or mastercard payment cards');
	// 	}
	// };

	return (
		<Styles>
			<h1>Credit Card Form</h1>

			<Form
				onSubmit={onSubmit}
				render={(props: FormRenderProps) => {
					return (
						<form onSubmit={props.handleSubmit}>
							<SimpleCard
								number={props.values.number || ''}
								name={props.values.name || ''}
								expiry={props.values.expiry || ''}
								cvc={props.values.cvc || ''}
								focused={props.active}
								acceptedCards={['visa', 'mastercard']}
								locale={{ valid: 'month/year' }}
								placeholders={{ name: 'YOUR NAME' }}
								// callback={handleCallbackCard}
							/>
							<div className="field_wrapp">
								<Field
									id="number"
									name="number"
									component="input"
									type="text"
									pattern="^[45].{1,19}$"
									placeholder="Card number (Visa/Mastercard)"
									format={formatCreditCardNumber}
								/>
								<Field
									name="name"
									component="input"
									type="text"
									pattern="^[a-zA-Z ]+$"
									placeholder="Owner's name"
								/>
							</div>
							<div className="field_wrapp">
								<Field
									name="expiry"
									component="input"
									type="text"
									pattern="\d\d/\d\d\d\d"
									placeholder="Mounth/Year in format mm/YYYY"
									format={formatExpirationDate}
								/>
								<Field
									name="cvc"
									component="input"
									type="text"
									pattern="\d{3}"
									placeholder="CVC/CVV"
									format={formatCVC}
								/>
							</div>
							<div className="button">
								<button type="submit" disabled={props.submitting}>
									<PaymentSuccess isSubmitting={isSubmitting} />
								</button>
							</div>
							<Messege checkSucccess={checkSucccess} />
						</form>
					);
				}}
			/>
		</Styles>
	);
};
