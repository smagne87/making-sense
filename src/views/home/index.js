import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { characterActions } from '../../actions';
import styles from './HomeStyles';

class Home extends PureComponent {
  componentDidMount() {
    const { getAllCharacters } = this.props;
    getAllCharacters(1);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homeMainContainer}>
        <div className={cls([classes.container, 'home-search-container'])}>
          <h2>Star Wars</h2>
          <p>Click on the character name to see the BIO.</p>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getAllCharacters: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    homeMainContainer: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToPropsActions = dispatch => ({
  getAllCharacters: page => dispatch(characterActions.getAllCharacters(page)),
});

const HomeStyles = withStyles(styles)(Home);

export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(HomeStyles));
