import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';

import { characterActions } from '../../actions';
import Loader from '../Loader';
import useStyles from './SidebarStyles';

const Sidebar = ({
  characters,
  count,
  currentPage,
  getAllCharacters,
  loading,
  fail,
}) => {
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    getAllCharacters(newPage);
  };

  if (loading) {
    return <Loader />;
  }
  if (fail) {
    return null;
  }
  return (
    <div>
      <Table aria-label="characters table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Character Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Movie #</TableCell>
            <TableCell align="right">Vehicles #</TableCell>
            <TableCell align="right">Starships #</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((row, index) => {
            let id = (index + 1) + (currentPage - 1) * 10;
            if (id > 16) {
              id += 1;
            }
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <MenuItem component={RouterLink} to={`/character/${id}`}>
                    {row.name}
                  </MenuItem>
                </TableCell>
                <TableCell align="right"><img className={classes.imageThumbnail} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" /></TableCell>
                <TableCell align="right">{row.films.length}</TableCell>
                <TableCell align="right">{row.vehicles.length}</TableCell>
                <TableCell align="right">{row.starships.length}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={count}
          rowsPerPage={10}
          page={currentPage}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
      />
    </div>
  );
};

Sidebar.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  fail: PropTypes.bool.isRequired,
  getAllCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  characters: {
    loading,
    fail,
    characters,
    count,
    currentPage,
  },
}) => ({
  characters,
  count,
  currentPage,
  loading,
  fail,
});

const mapDispatchToPropsActions = dispatch => ({
  getAllCharacters: page => dispatch(characterActions.getAllCharacters(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(Sidebar));
