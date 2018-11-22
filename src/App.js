    import React, { Component } from 'react';

    class App extends Component{
        render(){
            const headerStyle = {
                color: '#ff0000',
                textDecoration : 'underline'
            }
            return (
                <div style={headerStyle}>
                    Hello World Again!
                </div>
            )
        }       
    }

    export default App;