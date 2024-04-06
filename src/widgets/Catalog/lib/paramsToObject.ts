type paramsToObjectProp = string | undefined

export function paramsToObject(
    genre?: paramsToObjectProp,
    year?: paramsToObjectProp,
    type?: paramsToObjectProp,
    sortField?: paramsToObjectProp
) {
    const filteredParams = { genre, year, sortField, type } as Record<string, paramsToObjectProp>
    const filteredValues = Object.fromEntries(
        Object.entries(filteredParams).filter(([_, value]) => value)
    )

    const resultObject = {
        ...filteredValues,
    }

    return resultObject
}
