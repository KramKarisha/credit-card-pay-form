export interface StoreDataCardType {
	number: string;
	exp: string;
	ccv: string;
}

export interface ValuesCardType {
	number: string;
	expiry: string;
	name: string;
	cvc: string;
	active: string;
}

export interface CallbackCreditCardTypes {
	issuer: string;
	maxLength: number;
}

export interface MessegeProps {
	checkSucccess: boolean | undefined;
}

export interface PaymentSuccessProps {
	isSubmitting: boolean;
}
