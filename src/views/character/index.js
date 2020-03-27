import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from 'classnames';
import shortid from 'shortid';
import { get } from 'lodash';

import styles from './CharacterStyles';
import Loader from '../../components/Loader';
import { characterActions } from '../../actions';

class Character extends PureComponent {
  componentDidMount() {
    const { getCharacter, match, history } = this.props;
    const id = get(match, 'params.id');
    if (id) {
      getCharacter(id);
    } else {
      history.push('/home');
    }
  }

  componentDidUpdate(prevProps) {
    const { getCharacter, match } = this.props;
    const id = get(match, 'params.id');
    const prevId = get(prevProps, 'match.params.id');
    if (id !== prevId) {
      getCharacter(id);
    }
  }

  renderResource = (r, resourceName) => {
    const splitUrl = r.split('/');
    const idRes = splitUrl[splitUrl.length - 2];
    return (
      <Avatar key={shortid.generate()}>
        <img src={`https://starwars-visualguide.com/assets/img/${resourceName}/${idRes}.jpg`} alt="img" />
      </Avatar>
    );
  }

  render() {
    const {
      classes,
      character,
      loading,
      match,
    } = this.props;
    if (loading) {
      return <Loader />;
    }
    const id = get(match, 'params.id');
    return (
      <div className={cls([classes.characterMainContainer, 'characters-main-container'])}>
        <img className={classes.image} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
        <div className={cls([classes.bioContainer, 'bio-container'])}>
          <h2>{character.name}</h2>
          <div className="bio-info">
            <span><strong>Height:</strong> {character.height} CM</span>
            <span><strong>Mass:</strong> {character.mass} KG</span>
            <span><strong>Hair Color:</strong> {character.hair_color}</span>
            <span><strong>Skin Color:</strong> {character.skin_color}</span>
            <span><strong>Eye Color:</strong> {character.eye_color}</span>
            <span><strong>Birth Year:</strong> {character.birth_year}</span>
            <span><strong>Gender:</strong> {character.gender}</span>
          </div>
        </div>
        <div>
          <h3>Related Resources</h3>
          <div className={cls([classes.resourcesContainer, 'resource-container'])}>
            <div>
              <h4>Films</h4>
              <div>
                {character.films.map(f => this.renderResource(f, 'films'))}
              </div>
            </div>
            {character.vehicles.length > 0 && (
              <div>
                <h4>Vehicles</h4>
                <div>
                  {character.vehicles.map(f => this.renderResource(f, 'vehicles'))}
                </div>
              </div>
            )}
            {character.starships.length > 0 && (
              <div>
                <h4>Starships</h4>
                <div>
                  {character.starships.map(f => this.renderResource(f, 'starships'))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    species: PropTypes.arrayOf(PropTypes.string),
    vehicles: PropTypes.arrayOf(PropTypes.string),
    starships: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  fail: PropTypes.bool.isRequired,
  getCharacter: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    characterMainContainer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bioContainer: PropTypes.string.isRequired,
    resourcesContainer: PropTypes.string.isRequired,
  }).isRequired,
};

Character.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

const mapStateToProps = ({
  character: {
    character,
    loading,
    fail,
  },
}) => ({
  character,
  loading,
  fail,
});

const mapDispatchToPropsActions = dispatch => ({
  getCharacter: characterId => dispatch(characterActions.getCharacter(characterId)),
});

const CharacterStyles = withStyles(styles)(Character);

export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(CharacterStyles));
