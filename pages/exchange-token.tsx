import store from "../redux/store";
import useToggleAlert from "../hooks/useToggleAlert";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseCard from "../components/BaseCard";
import BaseIcon from "../components/BaseIcon";
import BuySellSummary from "../components/BuySellSummary";
import SelectCurrency from "../components/SelectCurrency";
import {
  clearSelected,
  setExchangeSell,
} from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";

// @ts-ignore
const ExchangeToken: NextPage = (props: {
  currencyA: {
    image: string;
  };
  currencyB: {
    image: string;
  };
  clearSelected: Function;
  setExchangeSell: Function;
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);
  const cardButtonTitle: string = "Exchange";
  const { currencyA, currencyB } = props;
  const [isOpened, setIsOpened] = useToggleAlert(false);

  return (
    <main>
      <BaseCard
        subtitle="Here you can exchange tokens"
        title="Exchange"
        AmountInputA={<AmountInput amountOf="exchangeToken" />}
        BaseButton={
          <BaseButton onClick={setIsOpened} title={cardButtonTitle} />
        }
        IconCurrencyA={<BaseIcon image={currencyA.image} size={46} />}
        IconCurrencyB={<BaseIcon image={currencyB.image} size={46} />}
        SelectCurrencyA={<SelectCurrency optionVal="A" />}
        SelectCurrencyB={<SelectCurrency optionVal="B" />}
        // @ts-ignore
        TransactionSummary={<BuySellSummary />}
      />
    </main>
  );
};

const mapDispatchToProps = () => {
  return {
    clearSelected,
    setExchangeSell,
  };
};
const mapStateToProps = (state: {
  selected: {
    currencyA: Object;
    currencyB: Object;
  };
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ExchangeToken);
