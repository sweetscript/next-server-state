import { useContext } from 'react';
export function useServerState(serverContext) {
    var context = useContext(serverContext.ClientContext);
    return [context.state, context.updateState];
}
//# sourceMappingURL=useServerState.js.map