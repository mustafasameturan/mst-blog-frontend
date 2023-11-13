import store from "..";
import { _append, _destroy, _destroyAll } from "."

export const modal = {
    append: (name, data = {}) => {
        store.dispatch(_append({
            name,
            data
        }))
    },
    destroy: () => { store.dispatch(_destroy()) },
    destroyAll: () => { store.dispatch(_destroyAll()) }
}