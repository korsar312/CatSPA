import {StoreRouter} from "./StoreRouter";

class RootStore {

    public routeStore: StoreRouter;

    constructor() {
        this.routeStore = new StoreRouter();
    }
}

const rootStore = new RootStore();
export default rootStore;