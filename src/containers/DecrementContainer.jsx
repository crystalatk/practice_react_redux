import Decrement from "../components/Decrement";
import { connect } from "react-redux";
import { actionDecrement } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(actionDecrement());
    },
  };
};

export default connect(null, mapDispatchToProps)(Decrement);
