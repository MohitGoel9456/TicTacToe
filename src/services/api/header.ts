export const Header = (accessKey: string) => {
    const headers = {
        Authorization: `Client-ID ${accessKey}`
    }
    return headers
}