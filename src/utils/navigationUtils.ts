//used to navigate to new screen
export const navigate = (navigation: any, path: string, params = {}): void => {
    navigation.navigate(path, params);
}
