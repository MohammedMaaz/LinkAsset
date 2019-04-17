import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Hi!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}