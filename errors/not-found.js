import {StatusCodes} from 'http-status-codes'
import CustomAPIError from './custom-api.js'

class NodFoundError extends CustomAPIError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

export default NodFoundError