import React, { Component } from 'react';
import './css/Awards.css';
import M from 'materialize-css';

function Award(props) {
  const winner = (props.winner ? <i class="material-icons orange-text">stars</i> : null);
  const group = (props.group ? <i class="material-icons purple-text">group</i> : null);
  const badge = (props.winner ?
    <span class="badge new" data-badge-caption="">{props.badge}</span>
    :
    <span class="badge">{props.badge}</span>
  )
  return (
    <li>
      <div class="collapsible-header">
        {winner}{group}{props.what}{badge}
      </div>
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
          "what": "March 2019 - Programming contest for quantitative trading",
          "description": (
            <div>
              Organized by Casuality Group y Liga de Bolsa.
              <br />
              It was a competition organized to hire a Python/C# developer at
              &ensp;
              <a href="http://www.causality-group.com/">Casuality Group</a>.
              <br />
              I managed to win in half an hour so I guess there were not many contestants.
              <br />
              However with the prize I bought a second monitor and a Huion 1060 Plus
              so I'm pretty happy
            </div>
          ),
          "badge": "#1"
        },
        {
          "group": true,
          "what": "February 2019 - Google Hashcode",
          "description": (
            <div>
              We competed for fun in 2019s Hashcode competition.
              <br />
              The problem (simplified) was to sort some pictures so they created
              great photo albums, according to some criteria.
              <br />
              After trying real solutions our best score was achieved by brute-forcing
              random orders and checking their supossed score.
              <br />
              It was fun and they had pizza in the Hub but it was not my best code.
            </div>
          ),
          "badge": "#3378"
        },
        {
          "what": "June 2018 - Spanish Olympics of Informatic",
          "description": (
            <div>
              In spanish <a href="https://olimpiada-informatica.org/">OIE</a>,
              It is the spanish clasificatory round for the
              &ensp;
              <a href="https://ioinformatics.org/">IOI</a>.
              <br />
              The level was high and I was overtaken by mathematicians and physicists.
              <br />
              However, I'm glad I tried it since it was my last chance. The OIE
              is only available for students under eighteen or still studying baccalourate.
            </div>
          ),
          "badge": "#14"
        },
        {
          "what": "April 2018 - Google Code Jam",
          "description": (
            <div>
              I was interested in this wide-world contest but I did not achieve
              great things. To enter round 2 you needed to be below 1500 during Round 1
              <br />
              Round 1C 2018: 3773rd
              <br />
              Round 1B 2018: 2435th
              <br />
              Round 1A 2018: 4215th
              <br />
              Qualification Round 2018: 5986th
            </div>
          ),
          "badge": "round 1B #2435"
        },
        {
          "group": true,
          "what": "March 2018 - HP CodeWars Barcelona",
          "description": (
            <div>
              <a href="http://www.hpcodewarsbcn.com/">
                HP Codewars Barcelona
              </a>
              &ensp;
              We entered the contest after winning in Madrid.
              <br />
              It was sad to lose since we were the top team during the first hour and a half
              but we were not able to stay there and we ended up the 4th.
              <br />
              In spite of that, it was my first visit to Barcelona and I loved the stay there.
              <br />
              The organizers that brought us from Madrid were so nice and HP prepared a really nice competition.
            </div>
          ),
          "badge": "#4"
        },
        {
          "winner": true,
          "group": true,
          "what": "February 2018 - HP CodeWars Madrid",
          "description": (
            <div>
              <a href="https://hpscds.com/codewars/madrid-es">
                HP Codewars Madrid
              </a>
              ,&ensp;
              <a href="https://www.europapress.es/portaltic/sector/noticia-hp-celebra-madrid-competicion-educativa-codewars-alumnos-11-centros-escolares-20180226151259.html">
                Article about it with a picture of us
              </a>
              &ensp;
              It was the first programming contest I participed in.
              <br />
              <a href="https://twitter.com/enriqcg">Enriqcg</a> and I were able to climb to the top
              and stay there for the rest of the competition.
              <br />
              That day I fell asleep and arrived late so it was good to turn the day around and win.
              I'm still using the laptop they gave us as a prize!
            </div>
          ),
          "badge": "#1"
        }
      ]} />
    );
  }
}

export default MyAwards;
