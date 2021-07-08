import { createList, ObservableList } from "@corets/list"
import {
  readLocalStorage,
  writeLocalStorage,
} from "@corets/local-storage-helpers"
import { CreateLocalStorageList } from "./types"

const cache: Record<string, ObservableList> = {}

export const createLocalStorageList: CreateLocalStorageList = <TValue>(
  storageKey,
  initialValue
) => {
  let value = cache[storageKey] as ObservableList<TValue>

  if (!value) {
    value = createList(readLocalStorage(storageKey, initialValue) as TValue[])
    value.listen((state) => writeLocalStorage(storageKey, state), {
      immediate: true,
    })
    cache[storageKey] = value
  }

  return value
}
