import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import axios from 'axios';

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
      searchResults: null,
      error: null,
    };
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate(input) {
    // TODO: validate and sanitize. Either custom or use a library.
    return input;
  }

  handleSubmit(e) {
    e.preventDefault();
    const validatedAddress = this.validate(this.state.inputAddress);
    axios
      .get(`/search?address=${validatedAddress}`)
      .then((res) => this.setState({ searchResults: res }))
      .catch((err) => {
        this.setState({ error: err });
        console.error(err);
      });
  }

  handleChange(e) {
    this.setState({ inputAddress: e.target.value });
  }

  render() {
    // TODO: style Submit button to be on the same line as the search bar.
    // TODO: render results in a dropdown table.
    // TODO: add an Add button to add the selected  result to the comparison table.
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
