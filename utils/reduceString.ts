export const reduceString = (size:number , str: string) => {
    let trimmedString = str.length > size ? str.substring(0, size-1)+ "..." : str;
    return trimmedString
}