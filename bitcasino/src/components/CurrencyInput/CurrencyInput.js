import './CurrencyInput.scss';

export default function CurrencyInput() {
  return (
    <div className="casino__currencytable">
      <div className="casino__input">
        <fieldset>
          <legend>Cryptocurrency Code</legend>
          <input type="text" />
        </fieldset>
      </div>
      <div className="casino__currencyaddbutton">
        <button>Add</button>
      </div>
      <div className="casino__advise">
        <span>Use of this service is subject to terms and conditions.</span>
      </div>
    </div>
  );
}
