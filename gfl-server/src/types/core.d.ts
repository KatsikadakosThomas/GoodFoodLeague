//  _____
// |_   _|
//   | |_   _ _ __   ___  ___
//   | | | | | '_ \ / _ \/ __|
//   | | |_| | |_) |  __/\__ \
//   \_/\__, | .__/ \___||___/
//       __/ | |
//      |___/|_|

import * as mongoose from 'mongoose';
import * as express from 'express';


const months="January"|"February"|"March"|"April"|"May"|"June"|"July"|"August"|"September"|"October"|"November"|"December";

declare namespace GFL {
    interface Request extends express.Request {
        user?: any;
    }



    interface Response extends express.Response {

    }

    type ControllerArgs = [Request, Response, express.NextFunction];

    interface NextFunction extends express.NextFunction {

    }

}

export default GFL;
