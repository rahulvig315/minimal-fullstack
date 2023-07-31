export const validateProps = <T extends object>(obj: T, props: Array<keyof T>) => {
    try {
        return props.every(prop => !!obj.hasOwnProperty(prop) && !!obj[prop]);
    } catch (error) {
        console.error('Invalid Object')
        return false
    }
}