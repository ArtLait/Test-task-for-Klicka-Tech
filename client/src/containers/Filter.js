import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { filterByName, filterBySong, filterByDate } from '../actions/filter'
import TextField from '../components/TextField'


const styles = () => ({
  container: {
    display: 'flex',
    background: 'red',
    width: 20
  }
});

class Filter extends React.Component {
    render() {
      let { names, songs, dates, filterByName, filterBySong, filterByDate } = this.props;
        return(
            <Grid item xs={3}>
                <TextField data={names} name={'исполнителя'} filter={filterByName} />
                <TextField data={songs} name={'песню'} filter={filterBySong} />
                <TextField data={dates} name={'год'} filter={filterByDate}/>
            </Grid>
        )
    }
}

let filter = function() {
  let musics = [];
  let compare = ((a, b) => {
      return a.value > b.value ? 1 : -1
  });
  return (state) => {
      if (!state.names) return;
      if (musics === state.musics) {
          return musics
      }
      state.names.sort(compare);
      state.songs.sort(compare);
      state.dates.sort(compare);
  }
}();

let mapStateToProps = (state) => {
  let { playlist: { musics = [], names = [], songs = [], dates = [] }} = state;
    filter(state.playlist);
    return {
        musics,
        names,
        songs,
        dates
    };
}

let mapDispatchToProps = (dispatch) => ({
  filterByName: (data) => dispatch(filterByName(data)),
  filterBySong: (data) => dispatch(filterBySong(data)),
  filterByDate: (data) => dispatch(filterByDate(data))
})

const connectedFilter = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Filter);

export default withStyles(styles)(connectedFilter);