import { connect } from 'react-redux';
import { changePage } from '../../containers/actions';
import Chain from './chain.component';
import { switchNetwork } from '../../actions/network';
import { changeAccount } from '../manage-account/actions';

const mapStateToProps = state => ({
  isLoading: state.appStateReducer.isLoading,
  networks: state.networkReducer.networks,
  network: state.networkReducer.network,
  accounts: state.accountReducer.accounts,
  account: state.accountReducer.account,
  backupPage: state.appStateReducer.backupPage,
});

const mapDispatchToProps = {
  changePage,
  switchNetwork,
  changeAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chain);