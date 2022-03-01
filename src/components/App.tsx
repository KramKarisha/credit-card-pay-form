import { Field, Form, FormRenderProps } from 'react-final-form';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { CallbackCreditCardTypes, StoreDataCardType } from '../types';
import { SimpleCard } from './Card';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../utils/index';
import { PaymentSuccess } from './PaymentSuccess';
import { Messege } from './Messege';

import Styles from '../styles/Styles';
import { SimpleModal } from './Modal';

export const App: FC = () => {
  const [stateOfCard, setStateOfCard] = useState<StoreDataCardType[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [checkSucccess, setCheckSuccess] = useState<boolean | undefined>(undefined);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/a5ae8585-b42d-486b-a4ff-25ebfebbaddf')
      .then(({ data }) => setStateOfCard(data))
      .catch((err) => console.log('Error fetching data', err));
  }, []);

  const onSubmit = async (values: any) => {
    const valueNumberCard = values.number.split(' ').join('');
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    const checkCardValues = stateOfCard?.some((card) => card.number === valueNumberCard);
    setCheckSuccess(checkCardValues);
    setIsSubmitting(false);
    handleOpenModal();
  };

  const numberValue = (num: string | undefined) => {
    if (num === undefined || num.length > 19) return;
    if (num.length > 3) {
      const arrNum = num?.split(' ');
      arrNum[1] = '****';
      arrNum[2] = '****';
      const result = arrNum.join(' ');
      return result;
    }
  };

  return (
    <Styles>
      <h1>Credit Card Form</h1>

      <Form
        onSubmit={onSubmit}
        render={(props: FormRenderProps) => {
          return (
            <form onSubmit={props?.handleSubmit}>
              <SimpleCard
                number={numberValue(props?.values?.number) || ''}
                name={props?.values?.name || ''}
                expiry={props?.values?.expiry || ''}
                cvc={props?.values?.cvc || ''}
                focused={props?.active}
                acceptedCards={['visa', 'mastercard']}
                locale={{ valid: 'month/year' }}
                placeholders={{ name: 'YOUR NAME' }}
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
                  type="password"
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
              <SimpleModal
                checkSucccess={checkSucccess}
                open={openModal}
                handleClose={handleCloseModal}
              />
            </form>
          );
        }}
      />
    </Styles>
  );
};
