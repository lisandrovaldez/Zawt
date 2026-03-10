const API_URL = 'http://localhost:3000'

interface ErrorResponse {
    message?: string | string[]
    error?: string
    statusCode?: number
}

function isErrorResponse(data: unknown): data is ErrorResponse {
    return (
        typeof data === 'object' &&
        data !== null &&
        ('message' in data || 'error' in data || 'statusCode' in data)
    )
}

export class ApiError extends Error {
    status: number
    statusText: string
    data?: ErrorResponse

    constructor(status: number, statusText: string, data: unknown) {
        let message = `Error ${status}: ${statusText}`
        let parsedData: ErrorResponse | undefined

        if (isErrorResponse(data)) {
            parsedData = data
            if (Array.isArray(data.message)) {
                message = data.message.join('. ')
            } else if (data.message) {
                message = data.message
            } else if (data.error) {
                message = data.error
            }
        } else if (typeof data === 'string') {
            message = data
        }

        super(message)
        this.name = 'ApiError'
        this.status = status
        this.statusText = statusText
        this.data = parsedData
    }
}

export const apiFetch = async <T>(
    endpoint: string,
    options: RequestInit = {},
    accessToken?: string
): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
        credentials: 'include',
    })

    if (!res.ok) {
        let errorData: unknown

        try {
            errorData = await res.json()
        } catch {
            errorData = await res.text()
        }

        throw new ApiError(res.status, res.statusText, errorData)
    }

    return res.json() as Promise<T>
}
