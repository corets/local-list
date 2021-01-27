import { ObservableList } from "@corets/list"

export type CreateLocalStorageList = <TValue>(
  storageKey: string,
  initialValue: TValue[]
) => ObservableList<TValue>
