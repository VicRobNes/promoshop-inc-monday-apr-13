"use client"

export const IMAGE_OVERRIDES_STORAGE_KEY = "promoshop_image_overrides_v1"
export const IMAGE_OVERRIDES_EVENT = "promoshop:image-overrides-changed"

export type ImageOverrides = Record<string, string>

function readFromStorage(): ImageOverrides {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(IMAGE_OVERRIDES_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return Object.fromEntries(
        Object.entries(parsed).filter(([, v]) => typeof v === "string" && v.length > 0),
      ) as ImageOverrides
    }
    return {}
  } catch {
    return {}
  }
}

function writeToStorage(next: ImageOverrides) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(IMAGE_OVERRIDES_STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new CustomEvent(IMAGE_OVERRIDES_EVENT))
  } catch {
    // localStorage may be full (data-URL uploads can be large). Swallow and
    // let the caller surface the error if they care — they can try/catch
    // around their own setOverride call and re-check getAllOverrides().
  }
}

export function getAllOverrides(): ImageOverrides {
  return readFromStorage()
}

export function getOverride(id: string): string | undefined {
  const all = readFromStorage()
  return all[id]
}

export function setOverride(id: string, value: string): void {
  const all = readFromStorage()
  if (!value) {
    delete all[id]
  } else {
    all[id] = value
  }
  writeToStorage(all)
}

export function clearOverride(id: string): void {
  const all = readFromStorage()
  delete all[id]
  writeToStorage(all)
}

export function replaceAllOverrides(next: ImageOverrides): void {
  const cleaned: ImageOverrides = {}
  for (const [k, v] of Object.entries(next)) {
    if (typeof v === "string" && v.length > 0) cleaned[k] = v
  }
  writeToStorage(cleaned)
}

export function resetAllOverrides(): void {
  writeToStorage({})
}
