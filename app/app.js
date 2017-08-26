import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute,IndexLink, hashHistory, browserHistory } from 'react-router'

class App extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='address' component={Address}>
                        <IndexRoute component={TwitterFeed} />
                        <Route path='address/instagram' component={Instagram} />
                        <Route path='address/twitter' component={TwitterFeed} />
                    </Route>
                    <Route path="namedComponent" component={NamedComponents} >
                        <IndexRoute components={{title:Title,subTitle:SubTitle}} />
                    </Route>
                    <Route path="about(/:name)" component={About} />
                    <Route path="query" component={Query} />
                    <Route path='*' component={NotFound} />

                </Route>
            </Router>
        )
    }
}

// Define the component for the route.
const Home  = () => <h1>Hello World!</h1>;
const NotFound = ()=> <h1>404... This page is not found!</h1>;
const Instagram = () => <h3>Instagram Feed</h3>;
const TwitterFeed = () => <h3>Twitter Feed</h3>;
const Title = () => (
    <h1>Hello from Title Component</h1>
);
const SubTitle = () => (
    <h1>Hello from SubTitle Component</h1>
);
const NamedComponents = (props) => (
    <div>
        {props.title}<br />
        {props.subTitle}
    </div>
);
// Customize to receive the parameter of name from url.
const About = (props) => (
    <div>
        <h3>Welcome to the About us.</h3>
        <h2>{props.params.name}</h2>
    </div>
);
const Query = (props)=> (
    <h2>{props.location.query.message}</h2>
);
const Nav = ()=> (
    <div>
        <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
        <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;
        <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/about'>About</Link>&nbsp;
        <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;
        <IndexLink
            activeClassName='active'
            to={{
                pathname: '/query',
                query: { message: 'Hello from Route Query' }
            }}>Route Query</IndexLink>
    </div>
);
const Address = (props) => <div>
    <br />
    <Link to='/twitter'>Twitter Feed</Link>&nbsp;
    <Link to='/instagram'>Instagram Feed</Link>
    <h1>We are located at 555 Jackson St.</h1>
    {props.children}
</div>;
const Container = (props) => <div>
    <Nav />
        {props.children}
</div>;

export default App


