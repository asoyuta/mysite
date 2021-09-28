import { Header, Article, Home, NotFound, AllArticles } from 'components/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/article">
              <AllArticles />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
