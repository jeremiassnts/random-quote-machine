import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import Quote from './Quote'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Text come from App"
    }
  }

  render() {
    return (
      <Container textAlign="center">
        <Quote text={this.state.text}></Quote>
        <Button color="twitter">
          <Icon name="twitter" /> Tweet Quote
        </Button>
        <Button>New Quote</Button>
      </Container>
    )
  }
}

export default App;
