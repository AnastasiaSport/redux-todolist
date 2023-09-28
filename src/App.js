import './App.css';
import {connect} from "react-redux";
import TodoList from "./components/TodoList";
import {Button, ChakraProvider, Container, Heading, Input, Stack} from '@chakra-ui/react'
import React from "react";

function App(props) {
    return (
        <ChakraProvider >

        <Container className="App" direction='row' spacing={4} align='center'>
            <Heading maxW='sm' mt={8}> {props.appName}</Heading>

            <TodoList/>

        </Container>
            </ChakraProvider>
    );
}

const mapStateToProps = (state) => ({
  appName: state.appHeader,
})

export default connect(mapStateToProps)(App);
