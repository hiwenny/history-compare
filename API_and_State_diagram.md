# API Mappings and State Diagram
This page documents the mappings of the BFF API layer and its effect on the App State.

## Table of Contents
## APIs:
- [search](#search)

[Putting it all together](#putting-it-all-together)

## `/search`
Use this to search for properties. Right now it's connected to CoreLogic API `/suggestions`.

-- image of suggestions data flow --

Once selected, only then does this move to persisted state. List should stay in buffer states _only_.

## Putting it all together
Sample end-to-end property search and addition:

