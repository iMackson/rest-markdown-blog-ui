import 'semantic-ui-css/semantic.min.css'
import { Router, Route, Switch } from 'react-router-dom';
import PostList from './containers/PostList';
import {createBrowserHistory} from 'history';
import Layout from './containers/Layout';
import PostCreate from './components/PostCreate';
import PostUpdate from './components/postUpdate';
import PostDetail from './components/PostDetail';
import PostDelete from './components/PostDelete';


const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/create" component={PostCreate} />
          <Route exact path="/posts/:postSlug" component={PostDetail} />
          <Route path="/posts/:postSlug/update" component={PostUpdate} />
          <Route path="/posts/:postSlug/delete" component={PostDelete} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
