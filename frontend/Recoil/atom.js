import { atom } from "recoil"

const userListAtom = atom({
    key: "userListAtom",
    default: []
})

export {
    userListAtom
}