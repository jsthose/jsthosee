import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setExchangeAmount } from "../../redux/actions/selectedActions";
import { useState } from "react";

const AmountInput = (props: { setExchangeAmount?: any; amountOf: string }) => {
  const { setExchangeAmount, amountOf } = props;
  const [amountValue, setAmountValue] = useState(0);

  const handleAmount = (event: any) => {
    setAmountValue(event.target.value);
    setExchangeAmount({ [amountOf]: event.target.value });
  };
  return (
    <form className={`${styles.form}`}>
      <input
        aria-describedby="exchange-amount-input"
        className="form-control"
        id="exchange-amount-input"
        max={100}
        min={0}
        onChange={handleAmount}
        pattern="\d\.\d{2}"
        type="number"
        value={amountValue}
      />
    </form>
  );
};

AmountInput.propTypes = {
  setExchangeAmmount: PropTypes.func,
  amountOf: PropTypes.string.isRequired,
};
const mapStateToProps = (state: { selected: { method: Object } }) => ({
  method: state.selected.method,
});

const mapDispatchToProps = { setExchangeAmount };
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AmountInput);
