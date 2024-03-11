'use strict';

// ----- Create HTML body -----

// ----- Create container -----
const divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.append(divContainer);

// ----- Create header -----
const divHeader = document.createElement('div');
divHeader.classList.add('header');
const divHeaderMain = document.createElement('div');
divHeaderMain.classList.add('header-main');
const headerH1 = document.createElement('h1');
headerH1.textContent = 'CREATE AN ACCOUNT';

// ----- Create slogan -----
const divHeaderSlogan = document.createElement('div');
divHeaderSlogan.classList.add('header-slogan');
const slogan = document.createElement('p');
slogan.textContent = 'We always keep your name and email address private.';

// ----- Create form -----
const form = document.createElement('form');

// ----- Create input text block -----
const inputTextBlock = document.createElement('div');
inputTextBlock.classList.add('input-text-block');

const fName = document.createElement('div');
fName.classList.add('elem-form');
const fNameInput = document.createElement('input');
fNameInput.setAttribute('type', 'text');
fNameInput.setAttribute('placeholder', 'First name');

const lName = document.createElement('div');
lName.classList.add('elem-form');
const lNameInput = document.createElement('input');
lNameInput.setAttribute('type', 'text');
lNameInput.setAttribute('placeholder', 'Last name');

const dName = document.createElement('div');
dName.classList.add('elem-form');
const dNameInput = document.createElement('input');
dNameInput.setAttribute('type', 'text');
dNameInput.setAttribute('placeholder', 'Display name');

const email = document.createElement('div');
email.classList.add('elem-form');
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email address');

const pass = document.createElement('div');
pass.classList.add('elem-form');
const passInput = document.createElement('input');
passInput.setAttribute('type', 'password');
passInput.setAttribute('placeholder', 'Password');

const confirmPass = document.createElement('div');
confirmPass.classList.add('elem-form');
const confirmPassInput = document.createElement('input');
confirmPassInput.setAttribute('type', 'password');
confirmPassInput.setAttribute('placeholder', 'Password Confirmation');

// ----- Create radiobutton group -----
const divRadioButtonGroup = document.createElement('div');
divRadioButtonGroup.classList.add('radio-button-group');

// ----- Create radiobutton block 'Buyer' -----
const divRadioButtonBlockBuyer = document.createElement('div');
divRadioButtonBlockBuyer.classList.add('input-radio-block');
const divRadioButtonBuyer = document.createElement('div');
divRadioButtonBuyer.classList.add('radio-button');
const radioButtonBuyerInput = document.createElement('input');
radioButtonBuyerInput.setAttribute('type', 'radio');
radioButtonBuyerInput.setAttribute('name', 'join-type');
radioButtonBuyerInput.setAttribute('id', 'buyer');
const radioButtonBuyerHeader = document.createElement('div');
radioButtonBuyerHeader.classList.add('radio-header');
const radioButtonBuyerLabel = document.createElement('label');
radioButtonBuyerLabel.textContent = 'Join As a Buyer';
radioButtonBuyerLabel.setAttribute('for', 'buyer');
const radioButtonBuyerLabelP = document.createElement('p');
radioButtonBuyerLabelP.textContent =
  'I am looking for a Name, Logo or Tagline for my business, brand or product.';

// ----- Create radiobutton block 'Creative' -----
const divRadioButtonBlockCreative = document.createElement('div');
divRadioButtonBlockCreative.classList.add('input-radio-block');
const divRadioButtonCreative = document.createElement('div');
divRadioButtonCreative.classList.add('radio-button');
const radioButtonCreativeInput = document.createElement('input');
radioButtonCreativeInput.setAttribute('type', 'radio');
radioButtonCreativeInput.setAttribute('name', 'join-type');
radioButtonCreativeInput.setAttribute('id', 'creative-seller');
const radioButtonCreativeHeader = document.createElement('div');
radioButtonCreativeHeader.classList.add('radio-header');
const radioButtonCreativeLabel = document.createElement('label');
radioButtonCreativeLabel.textContent =
  'Join As a Creative or Marketplace Seller';
radioButtonCreativeLabel.setAttribute('for', 'creative-seller');
const radioButtonCreativeLabelP = document.createElement('p');
radioButtonCreativeLabelP.textContent =
  'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';

// ----- Create checkbox block -----
const divCheckboxBlock = document.createElement('div');
divCheckboxBlock.classList.add('check-box-block');
const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('id', 'allow');
const checkboxLabel = document.createElement('label');
checkboxLabel.textContent =
  'Allow Squadhelp to send marketplacing/promotial offers from time to time';
checkboxLabel.setAttribute('for', 'allow');

// ----- Create 'button' block -----
const divButtonGroup = document.createElement('div');
divButtonGroup.classList.add('button-block');
const divCreateAccountButton = document.createElement('div');
divCreateAccountButton.classList.add('create-account-button');
const buttonCreateAccount = document.createElement('a');
buttonCreateAccount.textContent = 'Create account';
buttonCreateAccount.setAttribute('href', '#');
buttonCreateAccount.setAttribute('class', 'button');



// ----- Insert to HTML body -----

//       ----- Header -----
divContainer.append(divHeader);
divHeader.append(divHeaderMain);
divHeaderMain.append(headerH1);
divHeader.append(divHeaderSlogan);
divHeaderSlogan.append(slogan);

//     ----- Add form -----
divContainer.append(form);

//  ----- Add text block -----
form.append(inputTextBlock);
inputTextBlock.append(fName);
fName.append(fNameInput);
inputTextBlock.append(lName);
lName.append(lNameInput);
inputTextBlock.append(dName);
dName.append(dNameInput);
inputTextBlock.append(email);
email.append(emailInput);
inputTextBlock.append(pass);
pass.append(passInput);
inputTextBlock.append(confirmPass);
confirmPass.append(confirmPassInput);

//----- Add radiobutton group -----
form.append(divRadioButtonGroup);

//----- Add radiobutton block 'Buyer' -----
divRadioButtonGroup.append(divRadioButtonBlockBuyer);
divRadioButtonBlockBuyer.append(divRadioButtonBuyer);
divRadioButtonBuyer.append(radioButtonBuyerInput);
divRadioButtonBlockBuyer.append(radioButtonBuyerHeader);
radioButtonBuyerHeader.append(radioButtonBuyerLabel);
radioButtonBuyerHeader.append(radioButtonBuyerLabelP);

//----- Add radiobutton block 'Creative' -----
divRadioButtonGroup.append(divRadioButtonBlockCreative);
divRadioButtonBlockCreative.append(divRadioButtonCreative);
divRadioButtonCreative.append(radioButtonCreativeInput);
divRadioButtonBlockCreative.append(radioButtonCreativeHeader);
radioButtonCreativeHeader.append(radioButtonCreativeLabel);
radioButtonCreativeHeader.append(radioButtonCreativeLabelP);

//  ----- Add checkbox block -----
form.append(divCheckboxBlock);
divCheckboxBlock.append(checkboxInput);
divCheckboxBlock.append(checkboxLabel);

//   ----- Add button block -----
form.append(divCreateAccountButton);
divCreateAccountButton.append(buttonCreateAccount);
