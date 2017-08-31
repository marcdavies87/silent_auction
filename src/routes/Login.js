import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class ButtonExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button>
                      <Text> Click Me! </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

/**import React from 'react';
import { Scene, Router} from 'react-native-router-flux';

import Login from './Login';

export default () => (
<Router>
  <Scene Key="root">
    <Scene key="login" component={Login} hideNavBar/>
   </Scene>
</Router>
);**/
