import { HttpErrorResponse } from "@angular/common/http";

export const errorHandle = (err: HttpErrorResponse) => {
    throw err.error.message
} 