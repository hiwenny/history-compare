import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

/** Some considerations
 * The input value is self-contained in this Component because it's not currently used anywhere else.
 * Should it be used globally, then it should be in the global state
 * But not the parent. Keep the top lean as possible to prevent growing complexity due to managing multiple component states.
 */
export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      inputAddress: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting', this.state.inputAddress);
  }

  handleChange(e) {
    this.setState({ inputAddress: e.target.value });
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          id="standard-full-width"
          fullWidth
          placeholder="Enter address"
          style={{ margin: 8 }}
          helperText="Example: 1 George Street, Sydney NSW 2000"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleChange}
        />
        <Input type="submit" defaultValue="Search" inputProps={{ 'aria-label': 'search' }} />
      </form>
    );
  }
}
