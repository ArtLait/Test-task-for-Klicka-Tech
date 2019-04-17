import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Filter extends React.Component {
    state = {
        value: 'Some'
    };

    handleChange = name => event => {
      const value = event.target.value;
      this.setState({ [name]: value });
      this.props.filter(value);
    };
    
    render() {
        const { classes, data, name } = this.props;
        return <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.value}
          onChange={this.handleChange('value')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText={"Пожалуйста выбирите " + name}
          margin="normal"
        >
          {data.map(option => (
            <MenuItem key={option.id} value={option.value}>
              { option.value }
            </MenuItem>
          ))}
        </TextField>}
}

export default withStyles(styles)(Filter);