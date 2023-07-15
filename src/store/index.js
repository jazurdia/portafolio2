import { createStoreon } from "storeon"
import { routerNavigate } from "@storeon/router"
import router from "./router"

const store = createStoreon([
    router,
])

const navigate = (target) => {
    store.dispatch(routerNavigate, target)
}

export { navigate }
export { store}
