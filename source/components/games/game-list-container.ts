import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { GlobalState } from 'ventura/state/global';
import { GameList, PublicProps, ReduxDispatchProps, ReduxStateProps } from './game-list';
import { fetchGames } from '../../actions/games';

function mapStateToProps(_state: GlobalState, _props: PublicProps): ReduxStateProps {
  return {
    // map props
    gamesState: _state.games,
    loading: _state.loading,
  };
}
function mapDispatchToProps(dispatch: Dispatch<any>): ReduxDispatchProps {
  return bindActionCreators({
    // map dispatched actions
    fetchGames: fetchGames,
  }, dispatch);
}

// tslint:disable-next-line:variable-name
export const GameListContainer = connect(mapStateToProps, mapDispatchToProps)(GameList) as React.ComponentClass<PublicProps>;
