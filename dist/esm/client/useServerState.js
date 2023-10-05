import { useContext } from 'react';

function useServerState(serverContext) {
    var context = useContext(serverContext.ClientContext);
    return [context.state, context.updateState];
}

export { useServerState };
