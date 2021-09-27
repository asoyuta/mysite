import { Header, Article, ArticleList, Home } from 'components/index'
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
              <ArticleList />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
