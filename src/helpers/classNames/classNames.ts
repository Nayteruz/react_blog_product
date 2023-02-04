
type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods: Mods, additional: string[]): string {

    console.log(mods);
    console.log(Object.keys(mods).filter((className) => !!mods[className]))

    return [
        cls,
        ...additional,
        ...Object.keys(mods)
            .filter((className) => !!mods[className])
    ].join(' ')
}