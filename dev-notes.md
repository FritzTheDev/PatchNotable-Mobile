# Development Notes
#### These are a development aid but they also help others see my thought process as I code. All decisions & thoughts I have here are non-normative unless specificed otherwise.

## File Structure & Style Guide [NORMATIVE]
All code is automatically formatted by prettier on commit.

```javascript
/*
 * [File Path Based On How You Would Access it from ./src (No Leading Slash)]
 *
 * [Description of file]
 * [Description Continued]
 * 
 */

    import UndestructuredImport from "undestructured-import";
    import MixedImport, { otherMixedImport } from "mixed-import";
    import { destructuredImport } from "destructured-import";

    import UndestructuredImport from "./rel-undestructured-import";
    import MixedImport, { otherMixedImport } from "../rel-mixed-import";
    import { destructuredImport } from "../../rel-destructured-import";

    // Arbitrary Code (No Exports though)

    // End Arbitrary Code
    export const Component = exampleComponentExport;

    // !!!! DON'T USE DEFAULT EXPORTS  !!!! //
    // BAD: export default exampleComponentExport
    // !!!! DON'T USE DEFAULT EXPORTS  !!!! //

```