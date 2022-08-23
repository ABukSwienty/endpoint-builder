declare const suffixReader: (strings: string[]) => {
    suffixes: string[];
    types: (string | null)[];
    suffixesWithColon: string[];
};
export default suffixReader;
