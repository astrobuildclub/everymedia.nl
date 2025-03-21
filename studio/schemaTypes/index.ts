import { blockTypes } from "./blockTypes";
import { contentTypes } from "./contentTypes";
import { globalTypes } from "./globalTypes";


export const schemaTypes = [...contentTypes, ...blockTypes, ...globalTypes]
