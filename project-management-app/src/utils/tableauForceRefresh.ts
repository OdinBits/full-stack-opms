import { MutableRefObject } from 'react';


declare namespace tableau {
    interface Viz {
        refreshDataAsync(): void;
    }
}

const forceRefresh = (tableauRef: MutableRefObject<null | tableau.Viz>) => {
    if (tableauRef.current) {
        tableauRef.current.refreshDataAsync();
    }
};

export default forceRefresh;
