import { List } from "@corets/list"
import { createLocalStorageList } from "./createLocalStorageList"

describe("createLocalStorageList", () => {
  it("creates a hook store attached to the local storage", () => {
    const list1 = createLocalStorageList("test", ["foo"])

    expect(list1 instanceof List).toBe(true)
    expect(list1.get()).toEqual(["foo"])
    expect(JSON.parse(localStorage.getItem("test")!)).toEqual(["foo"])

    list1.set(["bar"])

    expect(list1.get()).toEqual(["bar"])
    expect(JSON.parse(localStorage.getItem("test")!)).toEqual(["bar"])

    const list2 = createLocalStorageList("test", ["yolo"])

    expect(list2.get()).toEqual(["bar"])
  })

  it("reuses instances based on the storage key", () => {
    const list1 = createLocalStorageList("foo", ["foo"])
    const list2 = createLocalStorageList("bar", ["bar"])
    const list3 = createLocalStorageList("foo", ["foo"])

    expect(list1 === list2).toBe(false)
    expect(list1 === list3).toBe(true)
  })
})
