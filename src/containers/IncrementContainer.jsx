import Increment from "../components/Increment";
import { connect } from "react-redux";
import { actionIncrement } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  // Translate Redux dispatch (aka dispatching an action) into a React prop
  return {
    handleClick: () => {
      dispatch(actionIncrement());
    },
  };
};

export default connect(null, mapDispatchToProps)(Increment);
