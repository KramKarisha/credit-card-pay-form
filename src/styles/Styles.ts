import styled, { css } from 'styled-components';

const btn = (light: any, dark: any) => css`
	white-space: nowrap;
	width: 80%;
	border-radius: 5px;
	padding: 10px 15px;
	font-size: 16px;
	color: white;
	&:visited {
		color: white;
	}
	background-image: linear-gradient(${light}, ${dark});
	border: 1px solid ${dark};
	&:hover {
		background-image: linear-gradient(${light}, ${dark});
		&[disabled] {
			background-image: linear-gradient(${light}, ${dark});
		}
	}
	&:visited {
		color: black;
	}
	&[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

const btnDefault = css`
	${btn('#ffffff', '#d5d5d5')} color: #555;
`;

const btnPrimary = btn('#a3f5bc', '#11ad40');
const btnDanger = btn('#e27c79', '#c9302c');

export default styled.div`
	h1 {
		text-align: center;
		color: #222;
		margin-top: 20px;
	}

	& > div {
		text-align: center;
	}

	.loading {
		font-size: 2em;
		font-weight: bold;
		text-align: center;
		margin: 50px;
	}

	.none {
		display: none;
	}

	.success {
		font-size: 24px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;

		& > span {
			display: flex;
			align-items: center;

			& > img {
				margin-right: 15px;
			}
		}
	}

	form,
	div.form {
		text-align: left;
		max-width: 500px;
		margin: 10px auto;
		border: 1px solid #ccc;
		padding: 20px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		border-radius: 3px;
		position: relative;

		& > div {
			display: flex;
			flex-flow: row nowrap;
			line-height: 2em;
			position: relative;
			padding: 8px 5px;
			border: 1px solid transparent;
			&.active {
				background-color: paleturquoise;
				border-color: turquoise;
			}
			& > label {
				color: #333;
				width: 110px;
				min-width: 60px;
				font-size: 1em;
				line-height: 32px;
			}
			& > input {
				flex: 1;
				padding: 6px 9px;
				font-size: 14px;
				margin-left: 15px;
				border: 1px solid #ccc;
				border-radius: 3px;
				&[disabled] {
					background: #eee;
				}
			}
			& > input[type='checkbox'] {
				margin-top: 7px;
			}
			& > div {
				margin-left: 16px;
				& > label {
					margin-left: 0;
					display: block;
					& > input {
						margin-right: 3px;
					}
				}
				&.downshift {
					margin-left: 0;
					padding-left: 15px;
					flex: 1;
					& > input {
						width: 100%;
						padding: 6px 5px;
						font-size: 1em;
						margin-left: 0;
						border: 1px solid #ccc;
						border-radius: 3px;
					}
				}
			}
			& > span {
				line-height: 32px;
				margin-left: 10px;
				color: #800;
				font-weight: bold;
			}
			& > button.remove {
				${btnDanger};
			}
		}
		& > .button {
			display: flex;
			flex-direction: column;
			flex-flow: row nowrap;
			justify-content: center;
			margin-top: 15px;
		}

		.error {
			display: flex;
			font-weight: bold;
			color: #800;
			flex-flow: row nowrap;
			justify-content: center;
		}

		.submitting {
			display: block;
			position: absolute;
			top: -5px;
			left: -5px;
			right: -5px;
			padding: 0;
			text-align: center;
			background: rgba(0, 0, 0, 0.4);
			color: white;
			z-index: 10;
			font-weight: bold;
			font-size: 0.8em;
		}
		@media (max-width: 485px) {
			.field_wrapp {
				display: flex;
				flex-direction: column;
			}
			.field_wrapp input:not(:last-child) {
				margin-bottom: 15px;
			}
		}
	}
	button {
		outline: none;
		border: none;
	}
	/* button {
		margin: 0 10px;
		&[type='submit'] {
			${btnPrimary};
		}
		&[type='button'] {
			${btnDefault};
		}
	} */
`;
