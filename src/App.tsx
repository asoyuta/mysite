import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/article/:id">
              <ArticlePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
