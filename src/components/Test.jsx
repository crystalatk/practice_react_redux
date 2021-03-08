import { connect } from "react-redux";

const Test = (props) => {
  return (
    <>
      <h1>This is the test</h1>
      <p>This is the name: {props.name}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  // Translate the Redux State into React Props
  return {
    amount: state.count,
    name: "Fire",
  };
};

export default connect(mapStateToProps)(Test);
