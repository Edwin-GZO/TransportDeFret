import { connect } from 'react-redux';

import Field from '../components/Field'
import { changeField } from '../store/action/user-actions';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.reducerName][ownProps.name],
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value, reducerName) => dispatch(changeField(name, value, reducerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);