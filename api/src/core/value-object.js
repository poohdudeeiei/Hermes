
/**
 * @typedef {Object} StatusCode
 * @property {number } OK

 * @property {number } CREATED

 * @property {number } ACCEPTED

 * @property {number } NON_AUTHORITATIVE_INFORMATION

 * @property {number } NO_CONTENT

 * @property {number } RESET_CONTENT

 * @property {number } PARTIAL_CONTENT

 * @property {number } MULTI_STATUS

 * @property {number } ALREADY_REPORTED_WEBDAV

 * @property {number } IM_USED

 * @property {number } MULTIPLE_CHOICES

 * @property {number } MOVED_PERMANENTLY

 * @property {number } FOUND

 * @property {number } SEE_OTHER

 * @property {number } NOT_MODIFIED

 * @property {number } USE_PROXY

 * @property {number } TEMPORARY_REDIRECT

 * @property {number } PERMANENT_REDIRECT

 * @property {number } BAD_REQUEST

 * @property {number } UNAUTHORIZED

 * @property {number } PAYMENT_REQUIRED

 * @property {number } FORBIDDEN

 * @property {number } NOT_FOUND

 * @property {number } METHOD_NOT_ALLOWED

 * @property {number } NOT_ACCEPTABLE

 * @property {number } PROXY_AUTHENTICATION_REQUIRED

 * @property {number } REQUEST_TIMEOUT

 * @property {number } CONFLICT

 * @property {number } GONE

 * @property {number } LENGTH_REQUIRED

 * @property {number } PRECONDITION_FAILED

 * @property {number } REQUEST_ENTITY_TOO_LARGE

 * @property {number } REQUEST_URI_TOO_LONG

 * @property {number } UNSUPPORTED_MEDIA_TYPE

 * @property {number } REQUESTED_RANGE_NOT_SATISFIABLE

 * @property {number } EXPECTATION_FAILED

 * @property {number } IM_A_TEAPOT

 * @property {number } ENHANCE_YOUR_CALM

 * @property {number } MISDIRECTED_REQUEST

 * @property {number } UNPROCESSABLE_ENTITY

 * @property {number } LOCKED

 * @property {number } FAILED_DEPENDENCY

 * @property {number } TOO_EARLY

 * @property {number } UPGRADE_REQUIRED

 * @property {number } PRECONDITION_REQUIRED

 * @property {number } TOO_MANY_REQUESTS

 * @property {number } REQUEST_HEADER_FIELDS_TOO_LARGE

 * @property {number } NO_RESPONSE

 * @property {number } RETRY_WITH

 * @property {number } BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS

 * @property {number } UNAVAILABLE_FOR_LEGAL_REASONS

 * @property {number } HTTP_REQUEST_SENT_TO_HTTPS_PORT

 * @property {number } TOKEN_EXPIRED_INVALID

 * @property {number } CLIENT_CLOSED_REQUEST

 * @property {number } INTERNAL_SERVER_ERROR

 * @property {number } NOT_IMPLEMENTED

 * @property {number } BAD_GATEWAY

 * @property {number } SERVICE_UNAVAILABLE

 * @property {number } GATEWAY_TIMEOUT

 * @property {number } HTTP_VERSION_NOT_SUPPORTED

 * @property {number } VARIANT_ALSO_NEGOTIATES

 * @property {number } INSUFFICIENT_STORAGE

 * @property {number } LOOP_DETECTED

 * @property {number } BANDWIDTH_LIMIT_EXCEEDED

 * @property {number } NOT_EXTENDED

 * @property {number } NETWORK_AUTHENTICATION_REQUIRED

 * @property {number } WEB_SERVER_IS_DOWN

 * @property {number } ORIGIN_IS_UNREACHABLE

 * @property {number } SSL_HANDSHAKE_FAILED

 * @property {number } NETWORK_READ_TIMEOUT_ERROR

 * @property {number } NETWORK_CONNECT_TIMEOUT_ERROR
*/

/** @type {StatusCode} */
const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED_WEBDAV: 208,
    IM_USED: 226,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    REQUEST_ENTITY_TOO_LARGE: 413,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    ENHANCE_YOUR_CALM: 420,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    NO_RESPONSE: 444,
    RETRY_WITH: 449,
    BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
    TOKEN_EXPIRED_INVALID: 498,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    WEB_SERVER_IS_DOWN: 521,
    ORIGIN_IS_UNREACHABLE: 523,
    SSL_HANDSHAKE_FAILED: 525,
    NETWORK_READ_TIMEOUT_ERROR: 598,
    NETWORK_CONNECT_TIMEOUT_ERROR: 599,
}

module.exports = HTTP_STATUS;
