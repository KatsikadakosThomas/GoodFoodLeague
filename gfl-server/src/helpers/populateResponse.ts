interface AcceptArgs {
    status?: number;
    message?: string;
    data?: any;
    error?: Error | string;
}

/**
 * Universal reply function for uniformity
 * @param status
 * @param message
 * @param data
 * @param error
 */
const populateResponse = ({ status, message, data, error }: AcceptArgs) => {
    return {
        ...(status ? { status } : error ? { status: 0 } : { status: 1 }),
        ...(message ? { message } : null),
        ...(data ? { data } : null),
        ...(error ? (error instanceof Error ? { error: error.message } : { error }) : null),
    };
};

export default populateResponse;
