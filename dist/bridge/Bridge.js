'use client';
import React, { useEffect, useRef } from 'react';
var Bridge = function (props) {
    var 
    // enableSSE,
    state = props.state, updateState = props.updateState, uniqueKey = props.uniqueKey, onUpdateFinish = props.onUpdateFinish, disableApiUpdateRequest = props.disableApiUpdateRequest, disableApiFetchRequest = props.disableApiFetchRequest;
    var updateController = useRef(null);
    var readyRef = useRef(false);
    useEffect(function () {
        if (!readyRef.current) {
            readyRef.current = true;
            return;
        }
        if (disableApiUpdateRequest || !state)
            return;
        if (updateController.current) {
            updateController.current.abort();
        }
        var newController = new AbortController();
        updateController.current = newController;
        fetch("/api/server-state/handle/".concat(uniqueKey), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state),
            signal: newController.signal
        })
            .then(function () {
            onUpdateFinish();
        })
            .catch(function (e) {
            console.log('e', e);
        });
        return function () {
            var _a;
            (_a = updateController.current) === null || _a === void 0 ? void 0 : _a.abort();
        };
    }, [state]);
    useEffect(function () {
        // Attach fetch listener to listen for server actions and refresh the status
        function fetchStateFromServer() {
            fetch("/api/server-state/handle/".concat(uniqueKey), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (res) { return res.json(); })
                .then(function (res) {
                updateState(res);
                setTimeout(function () {
                    onUpdateFinish();
                }, 50);
            })
                .catch(function () {
                //
            });
        }
        if (!disableApiFetchRequest) {
            window.addEventListener('server-action-settled', fetchStateFromServer);
        }
        return function () {
            // Detach fetch listener
            if (!disableApiFetchRequest) {
                window.removeEventListener('server-action-settled', fetchStateFromServer);
            }
        };
    }, []);
    /*let eventSource: EventSource | undefined;
    useEffect(() => {
      if (enableSSE) {
        eventSource = new EventSource(`/api/server-state/sse`, {
          withCredentials: true
        });
        eventSource.onopen = () => {
          console.log('open');
        };
        eventSource.onmessage = (e) => {
          console.log(e.data);
        };
        eventSource.onerror = (e) => {
          console.log(e);
        };
      }
      return () => {
        if (enableSSE && eventSource) {
          eventSource.close();
        }
      };
    }, []);*/
    return React.createElement("span", null);
};
export default Bridge;
//# sourceMappingURL=Bridge.js.map