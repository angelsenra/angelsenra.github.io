import React, { Component } from 'react';
import './css/projects.css';

const ICONS = {
  "yadkee/c21-fastly-api-tool": ["vpn_lock", "red"],
  "yadkee/c21-ts-parser": ["movie", "orange"],
  "yadkee/competition-toolkit": ["functions", "black"],
  "yadkee/dailyprogrammer": ["forum", "orange"],
  "yadkee/euler": ["functions", "green"],
  "yadkee/example-repo": ["folder", "green"],
  "yadkee/hpcodewars-madrid-2018": ["insert_comment", "teal"],
  "yadkee/knowledge": ["bookmark_border", "black"],
  "yadkee/machine-learning": ["share", "pink"],
  "yadkee/minesweeper": ["videogame_asset", "grey"],
  "yadkee/orphans": ["folder_open", "cyan"],
  "yadkee/personal-computer": ["computer", "grey"],
  "yadkee/sleep-tracking": ["event", "teal"],
  "yadkee/spaghetti": ["mood", "purple"],
  "yadkee/tictactoe": ["grid_on", "red"],
  "yadkee/yadkee.github.io": ["web", "blue"],
};

const LANGUAGES = {
  "python": "blue",
  "c": "black",
  "c++": "black",
  "react": "pink",
  "materialize": "pink",
};

const onLinkClick = async (event) => {
  window.goatcounter.count({
    event: true,
    path: (p) =>
      window.location.host + window.location.pathname || "/" + window.location.hash + "&ext=" + event.currentTarget.href,
  })
}

function Repository(props) {
  let icon;
  const link = "https://github.com/" + props.name;
  if (props.name in ICONS) {
    const icon_tuple = ICONS[props.name];
    icon = <i className={"material-icons circle " + icon_tuple[1]}>{icon_tuple[0]}</i>
  } else {
    icon = <i className={"material-icons circle black-text"}>help_outline</i>
  }
  const tags = props.tags.map((tag, i) => {
    if (tag in LANGUAGES) {
      return <span key={i} className={"github-tag badge new " + LANGUAGES[tag]} data-badge-caption={tag}></span>;
    } else {
      return <span key={i} className="github-tag badge new" data-badge-caption={tag}></span>;
    }
  }
  );
  const archived = (props.archived ?
    <span className="github-archived badge new red" data-badge-caption="Archived"></span>
    : null
  );
  const now = new Date();
  const updated = new Date(props.updated);
  const sec = Math.floor((now - updated) / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(day / 30);
  const year = Math.floor(day / 365);
  let updated_delta;
  if (year) {
    updated_delta = year + " year" + (year > 1 ? "s" : "");
  } else if (month) {
    updated_delta = month + " month" + (month > 1 ? "s" : "");
  } else if (week) {
    updated_delta = week + " week" + (week > 1 ? "s" : "");
  } else if (day) {
    updated_delta = day + " day" + (day > 1 ? "s" : "");
  } else if (hour) {
    updated_delta = hour + " hour" + (hour > 1 ? "s" : "");
  } else if (min) {
    updated_delta = min + " minute" + (min > 1 ? "s" : "");
  } else {
    updated_delta = sec + " second" + (sec > 1 ? "s" : "");
  }

  return (
    <li className="collection-item avatar">
      {icon}
      <div className="github-repository">
        <span className="title"><a href={link} onClick={onLinkClick}>{props.name}</a></span>
        <span className="show-on-med-and-up">&ensp;</span>
        <br className="hide-on-med-and-up" />
        <span className="github-updated">Updated {updated_delta} ago</span>
        {archived}
        <p className="black-text">{props.description}</p>
        <div className="clear">
          {tags}
        </div>
      </div>
      <div className="secondary-content">
        <a href={link} onClick={onLinkClick}><i className="material-icons github-star">star</i></a>
        <br />
        <span className="badge github-license">MIT</span>
      </div>
    </li>
  );
}

class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "elements": []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/yadkee/repos?sort=updated", {
      "headers": {
        "Accept": "application/vnd.github.mercy-preview+json"
      }
    })
      .then((response) => { return response.json(); })
      .then((data) => {
        let repo;
        let childs = [];
        for (let i = 0; i < data.length; i++) {
          repo = data[i];
          if (repo.fork) {
            continue;
          }
          const child = (
            <Repository key={i} name={repo.full_name} description={repo.description}
              updated={repo.updated_at} archived={repo.archived}
              tags={repo.topics} license={repo.license?.spdx_id} />
          );
          childs.push(child);
        }
        this.setState({
          "elements": childs
        });
      });
  }

  render() {
    return (
      <ul id="my_projects" className="collection">
        {this.state.elements}
      </ul>
    );
  }
}

export default MyProjects;
