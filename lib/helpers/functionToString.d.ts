declare const functionToString: (uri: string, data?: {
    suffixes: string[];
    types: (string | null)[];
    suffixesWithColon: string[];
} | undefined) => string;
export default functionToString;
