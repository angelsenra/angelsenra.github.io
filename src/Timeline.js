import React from 'react';
import './css/Timeline.css';


function TimelineEvent(props) {
  let content;
  if (props.type === "info") {
    content = (
      <div class="card timeline-content grey-text text-darken-4">
        <div class="card-content">
          <div class="card-title activator grey-text text-darken-4">
            <i class="material-icons right">keyboard_arrow_up</i>
            <h6>{props.when}</h6>
            <h5>{props.where}</h5>
            <i>{props.what}</i>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            What<i class="material-icons right">close</i>
          </span>
          <p>{props.description}</p>
        </div>
      </div>
    );
  } else if (props.type === "tabs") {
    content = (
      <div class="card timeline-content grey-text text-darken-4">
        <div class="card-content">
          <h6>{props.when}</h6>
          <p>{props.what}</p>
        </div>
        <div class="card-tabs">
          <ul class="tabs tabs-fixed-width">
            <li class="tab"><a href={"#" + props.alias + "-0"}>What</a></li>
            <li class="tab"><a class="active" href={"#" + props.alias + "-1"}>Where</a></li>
          </ul>
        </div>
        <div class="card-content grey lighten-4">
          <div id={props.alias + "-0"}>{props.description}</div>
          <div id={props.alias + "-1"}>{props.where}</div>
        </div>
      </div>
    );
  }

  return (
    <li class="timeline-event">
      {content}
      <div class={"timeline-badge " + props.iconBg + " " + props.iconFg + "-text"}>
        <i class="material-icons">{props.icon}</i>
      </div>
    </li>
  );
}


function Timeline(props) {
  const events = props.events;
  const listItems = events.map((event) =>
    <TimelineEvent {...event} />
  );
  return (
    <ul class="timeline">{listItems}</ul>
  );
}


function MyTimeline(props) {
  return (
    <Timeline events={[
      {
        "type": "info",
        "when": "July 2018 - [...]",
        "what": "Freelance",
        "where": "Cires21",
        "description": "REST API developer & more",
        "icon": "work",
        "iconFg": "white",
        "iconBg": "red"
      },
      {
        "alias": "University",
        "type": "tabs",
        "when": "2018 - 2022",
        "what": "Double degree in Software Engineering and Technologies for the Society of Information",
        "where": (
          <a href="http://www.upm.es/">
            Technical University of Madrid
      </a>
        ),
        "description": ".",
        "icon": "school",
        "iconFg": "white",
        "iconBg": "blue"
      },
      {
        "type": "info",
        "when": "February 2018 - May 2018",
        "what": "Freelance",
        "where": "KSNetwork.es",
        "description": "Together we innovated in the creation of match analysis tools, improving the experience of players and organizers.",
        "icon": "work",
        "iconFg": "white",
        "iconBg": "orange"
      },
      {
        "alias": "Baccalourate",
        "type": "tabs",
        "when": "2016 - 2018",
        "what": "Baccalourate - Technological",
        "where": (
          <a href="http://www.educa.madrid.org/web/ies.ramirodemaeztu.madrid/">
            IES Ramiro de Maeztu
      </a>
        ),
        "description": ".",
        "icon": "school",
        "iconFg": "white",
        "iconBg": "blue"
      },
      {
        "type": "info",
        "when": "April 2016",
        "what": "Internship '4+ empresa Comunidad de Madrid​'",
        "where": "Fullcircle",
        "description": "At Fullcircle I was introduced to the worklife.",
        "icon": "work",
        "iconFg": "white",
        "iconBg": "teal"
      },
      {
        "alias": "Secondary",
        "type": "tabs",
        "when": "2012 - 2016",
        "what": "Secondary education with honors",
        "where": (
          <a href="https://colegionsnieves.es/">
            CEIP Nuestra Señora de las Nieves
      </a>
        ),
        "description": ".",
        "icon": "school",
        "iconFg": "white",
        "iconBg": "blue"
      }
    ]} />
  );
}

export default MyTimeline;
