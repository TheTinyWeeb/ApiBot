const Keys: Array<string> = ['stylizedKey', 'clientKey'];

//defining an enum for our success codes
enum SuccessCodes {
    'OK' = 200
};

//defining an enum for our partial codes
enum PartialCodes {
    'PARTIAL_RESPONSE' = 30089,
    'INCOMPLETE_RESPONSE' = 35002
};

//finally defining one for faliure codes
enum FailiureCodes {
    'NOT_FOUND' = 50078,
    'BAD_REQUEST' = 50040,
    'MISSING_PARAMS' = 52008,
    'INTERNAL_FAILIURE' = 52030,
    'EXTERNAL_FAILIURE' = 53096,
    'REQUEST_TIMED_OUT' = 57540
};

export default {
    Keys,
    SuccessCodes,
    PartialCodes,
    FailiureCodes
};