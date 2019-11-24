
## Design Considerations

### Modern React
I'd like to minimise React-related libraries used. That means doing away with redux, for starters, if possible.

This way requires special care to design components hierarchy according to the propagation of components affected by a state change.

Some considerations on the decisions:
- BFF layer:
  - This provides separation to the backend provider. Putting a shield in between allows for switching without polluting the UI layer.
- No Redux:
  - substitute with HOC for enhancements
  - Tradeoff is the ability to persist - outside of setting localStorage manually. In that case just use Redux...
  - On the flip side, since the app is designed to be a blank state every time, this could work. The use of states means I don't have to deal with clearing and resets.
  - Other maybe-tradeoff is having to put a speed bump on exit to make sure the user doesn't navigate away accidentally and lose data. More annoying, but alas.

- Functional pattern all over:
  - Minimize the use of class
  - Hooks for state