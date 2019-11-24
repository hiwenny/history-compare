# API Mappings and State Diagram
This page documents the mappings of the BFF API layer and its effect on the App State.

## Table of Contents
## APIs:
- [search](#search)

[Putting It All Together](#putting-it-all-together)

[Data Source](#data-source)

## `/search`
Use this to search for properties. Right now it's connected to CoreLogic API `/suggestions` but it can be anything really.

<img src="https://raw.githubusercontent.com/hiwenny/history-compare/bdcab6935a57dcb245843a86cf6b7ca8f6026369/readme/search.svg?sanitize=true">

Once selected, only then does this move to persisted state. List should stay in buffer states _only_.

## Putting it all together
Sample end-to-end property search and addition:

## Data source
CoreLogic was the first choice, but ultimately it comes down to whether the cost to integrate is acceptable vs the benefit it provides.

If not, it should be easily repurposed for a different source of data, or provide data entry capability.

<img src="https://raw.githubusercontent.com/hiwenny/history-compare/9261c81718df412b7dcbd6a344cd0fc0fee5e06d/readme/flow_of_Information.svg?sanitize=true">
