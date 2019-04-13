import React, { Component } from 'react';
import './css/Projects.css';

const icons = {
  "yadkee/yadkee.github.io": ["web", "blue"],
  "yadkee/euler": ["functions", "green"],
  "yadkee/calendar": ["event", "teal"],
  "yadkee/tictactoe": ["grid_on", "red"],
  "yadkee/knowledge": ["bookmark_border", "black"],
  "yadkee/orphans": ["folder_open", "cyan"],
  "yadkee/dailyprogrammer": ["forum", "orange"],
  "yadkee/spaghetti": ["mood", "purple"],
  "yadkee/TeleManager": ["near_me", "blue"],
  "yadkee/TsParser": ["movie", "orange"],
  "yadkee/HPcodewarsMadrid2018": ["insert_comment", "teal"],
  "yadkee/CiresFastlyApiTool": ["vpn_lock", "red"],
  "yadkee/minesweeper": ["videogame_asset", "grey"],
  "yadkee/personal_computer": ["computer", "grey"],
  "yadkee/compTK": ["functions", "black"],
  "yadkee/heroku_main": ["person_outline", "purple"],
  "yadkee/machine_learning": ["share", "pink"],
  "yadkee/uniquify": ["photo", "grey"]
};


function Repository(props) {
  const link = "https://github.com/" + props.name;
  let icon = (props.icon ?
    <i className={"material-icons circle " + props.color}>{props.icon}</i>
    : null
  );
  if (icon === null && props.name in icons) {
    const iconv = icons[props.name];
    icon = <i className={"material-icons circle " + iconv[1]}>{iconv[0]}</i>
  }
  const tags = props.tags.map((tag) =>
    <span className="github-tag badge new" data-badge-caption={tag}></span>
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
      <span className="title"><a href={link}>{props.name}</a></span>
      <span className="github-updated">Updated {updated_delta} ago</span>
      {archived}
      <p className="black-text">{props.description}</p>
      {tags}
      <div className="secondary-content">
        <a href={link}><i className="material-icons github-star">star</i></a>
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
            <Repository name={repo.full_name} description={repo.description}
              updated={repo.updated_at} archived={repo.archived}
              tags={repo.topics} license={repo.license.spdx_id} />
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
