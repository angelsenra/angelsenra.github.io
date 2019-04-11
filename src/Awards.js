import React, { Component } from 'react';
import M from 'materialize-css';

function Award(props) {
  const winner = (props.winner ? <i class="material-icons">stars</i> : null);
  const group = (props.group ? <i class="material-icons">group</i> : null);
  return (
    <li>
      <div class="collapsible-header">
        {winner}{group}{props.what}
        <span class="badge">{props.badge}</span></div>
      <div class="collapsible-body">
        {props.description}
      </div>
    </li>
  )
}


function Awards(props) {
  const _class = "collapsible" + (props.class ? " " + props.class : "");
  const events = props.events;
  const listItems = events.map((event) =>
    <Award {...event} />
  );
  return (
    <ul class={_class}>{listItems}</ul>
  );
}

class MyAwards extends Component {
  componentDidMount() {
    var elements = document.querySelector(".collapsible.expandable");
    /* var instance = */M.Collapsible.init(elements, {
      accordion: false,
    });
  }

  render() {
    return (
      <Awards class="expandable no-autoinit" events={[
        {
          "winner": true,
          "what": "Programming contest for quantitative trading",
          "description": "I should describe this.",
          "badge": "#1"
        },
        {
          "group": true,
          "what": "HP CodeWars Barcelona",
          "description": "I should describe this.",
          "badge": "#4"
        },
        {
          "winner": true,
          "group": true,
          "what": "HP CodeWars Madrid",
          "description": "I should describe this.",
          "badge": "#1"
        }
      ]} />
    );
  }
}

export default MyAwards;
