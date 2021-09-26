import { Header } from 'components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
