

let InitialState: string = 'USD'
export const inputReducer = (state: string = InitialState, action: getRUBRateActionType): string => {
    switch (action.type) {
        case 'GET-INPUT':
            return action.inputData
        default:
            return state
    }
}

export type getRUBRateActionType = ReturnType<typeof getInputAC>

export const getInputAC = (inputData: string) => (
    {
        type: 'GET-INPUT',
        inputData
    } as const)