export const required = (value) => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLenghtCreator = (maxLenght) => (value) => {
 if (value.length > maxLenght) return `Max Lenght is ${maxLenght} symbols`
 return undefined
}