import React from 'react'
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app.jsx';
import Blog from './blog.jsx';
import { BrowserRouter, Route, withRouter } from "react-router-dom";


class Container extends React.Component {
  componentDidMount() {
    // https://github.com/ReactTraining/react-router/issues/3554
    this.unlisten = this.props.history.listen((location, action) => {
      window.goatcounter.count()
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return this.props.children
  }
}
const Decorated = withRouter(Container)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Decorated>
        <Route path="/" exact component={App} />
        <Route path="/blog/" component={Blog} />
      </Decorated>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
