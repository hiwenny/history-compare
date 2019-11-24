# API Mappings and State Diagram
This page documents the mappings of the BFF API layer and its effect on the App State.

## Table of Contents
## APIs:
- [search](#search)

[Putting it all together](#putting-it-all-together)

## `/search`
Use this to search for properties. Right now it's connected to CoreLogic API `/suggestions`.

<img src="https://raw.githubusercontent.com/hiwenny/history-compare/bdcab6935a57dcb245843a86cf6b7ca8f6026369/readme/search.svg?sanitize=true">

Once selected, only then does this move to persisted state. List should stay in buffer states _only_.

## Putting it all together
Sample end-to-end property search and addition:

