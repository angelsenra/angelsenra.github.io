import React from 'react';
import './css/timeline.css';


const onLinkClick = async (event) => {
  window.goatcounter.count({
    event: true,
    path: (p) =>
      window.location.host + window.location.pathname || "/" + window.location.hash + "&ext=" + event.currentTarget.href,
  })
}

function When(props) {
  return (
    <h6 className="text-darken-2">{props.when}</h6>
  );
}

function Where(props) {
  let title;
  if (props.type === "info") {
    title = (<h5 className="text-darken-4">{props.where}</h5>);
  }
  else {
    title = (<h6 className="text-darken-4">{props.where}</h6>);
  }
  if (props.where_link) {
    return (<a href={props.where_link} onClick={onLinkClick}>{title}</a>);
  } else {
    return title;
  }
}


function TimelineEvent(props) {
  let content;
  if (props.type === "info") {
    content = (
      <div className="card timeline-content">
        <div className="card-content">
          <div className="card-title activator">
            <i className="material-icons right">keyboard_arrow_up</i>
            <When {...props} />
            <Where {...props} />
            <i>{props.what}</i>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title">
            What<i className="material-icons right">close</i>
          </span>
          <p>{props.description}</p>
        </div>
      </div>
    );
  } else if (props.type === "tabs") {
    content = (
      <div className="card timeline-content">
        <div className="card-content">
          <When {...props} />
          <p>{props.what}</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a href={"#" + props.alias + "-0"}>What</a></li>
            <li className="tab"><a className="active" href={"#" + props.alias + "-1"}>Where</a></li>
          </ul>
        </div>
        <div className="card-content lighten-4">
          <div id={props.alias + "-0"}>{props.description}</div>
          <div id={props.alias + "-1"}><Where {...props} /></div>
        </div>
      </div>
    );
  }

  return (
    <li className="timeline-event">
      {content}
      <div className={"timeline-badge " + props.color}>
        <i className="material-icons">{props.icon}</i>
      </div>
    </li>
  );
}


function Timeline(props) {
  const events = props.events;
  const listItems = events.map((event, i) =>
    <TimelineEvent key={i} {...event} />
  );
  return (
    <ul className="timeline">{listItems}</ul>
  );
}


function MyTimeline(props) {
  return (
    <Timeline events={[
      {
        "type": "info",
        "when": "October 2019 - [...]",
        "what": "Backend Software Engineer",
        "where": "Usersnap",
        "where_link": "http://www.usersnap.com",
        "description": (
          <span>
            Development of the usersnap product
          </span>
        ),
        "icon": "work",
        "color": "blue white-text"
      },
      {
        "type": "info",
        "when": "July 2018 - October 2019",
        "what": "Software Engineer",
        "where": "Cires21",
        "where_link": "http://www.cires21.com/en",
        "description": (
          <span>
            Design and development of the saas platform<br />
            Direct comunication with clients and third parties
          </span>
        ),
        "icon": "work",
        "color": "red white-text"
      },
      {
        "alias": "University",
        "type": "tabs",
        "when": "2018 - 2022",
        "what": "Degree in Software Engineering",
        "where": "Technical University of Madrid",
        "where_link": "http://www.upm.es/",
        "description": "First year average: 7.4",
        "icon": "school",
        "color": "blue white-text"
      },
      {
        "type": "info",
        "when": "February 2018 - May 2018",
        "what": "Freelance Software Engineer",
        "where": "KSNetwork.es",
        "where_link": "https://ksnetwork.es",
        "description": "Together we innovated in the creation of match analysis tools, improving the experience of players and organizers",
        "icon": "work",
        "color": "orange white-text"
      },
      {
        "alias": "Baccalourate",
        "type": "tabs",
        "when": "2016 - 2018",
        "what": "Baccalourate - Technological",
        "where": "IES Ramiro de Maeztu",
        "where_link": "http://www.educa.madrid.org/web/ies.ramirodemaeztu.madrid/",
        "description": "Attended multiple clubs including a programming one. It was the reason why I participated in HP Codewars Madrid 2018",
        "icon": "school",
        "color": "blue lighten-2 white-text"
      },
      {
        "type": "info",
        "when": "April 2016",
        "what": "Internship '4+ empresa Comunidad de Madrid​'",
        "where": "Fullcircle",
        "where_link": "https://www.fullcircle.es/",
        "description": "At Fullcircle I was introduced to the worklife",
        "icon": "work",
        "color": "green white-text"
      },
      {
        "alias": "Secondary",
        "type": "tabs",
        "when": "2012 - 2016",
        "what": "Secondary education with honors",
        "where": "CEIP Nuestra Señora de las Nieves",
        "where_link": "https://colegionsnieves.es/",
        "description": "Received honorable mention from the community of Madrid",
        "icon": "school",
        "color": "blue lighten-4 white-text"
      }
    ]} />
  );
}

export default MyTimeline;
