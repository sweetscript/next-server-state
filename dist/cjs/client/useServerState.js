'use strict';

var React = require('react');

function useServerState(serverContext) {
    var context = React.useContext(serverContext.ClientContext);
    return [context.state, context.updateState];
}

exports.useServerState = useServerState;
