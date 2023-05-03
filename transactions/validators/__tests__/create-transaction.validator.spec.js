import { BadRequestError } from "../../errors/bad-request.error.js";
import { validateCreateTransaction } from "../create-transaction.validator";

describe('Create transaction validator', () => {

    let request;
    let response;

    beforeEach(() => {
        request = {
            body: {
                date: '2030-01-01',
                money: {
                    currency: 'anyCurrency',
                    value: 100
                },
                transactionType: 'anyTransactionType',
                type: 'income',

            }
        }
        response = new ResponseMock();
    })

    test('Given date not informed, then return error 400', () => {
        request.body.date = null;
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given date not informed, then return error message', () => {
        request.body.date = null;
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given date invalid, then return error 400', () => {
        request.body.date = 'invalidDate';
        
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given date invalid, then return error message', () => {
        request.body.date = 'invalidDate';

        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);;
    })

    test('Given money not informed, then return error 400', () => {
        request.body.money = null;
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given money not informed, then return error message', () => {
        request.body.money = null;
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given currency not informed, then return error 400', () => {
        request.body.money.currency = null;
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given currency not informed, then return error message', () => {
        request.body.money.currency = null;
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given value not informed, then return error 400', () => {
        request.body.money.value = null;
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given value not informed, then return error message', () => {
        request.body.money.value = null;
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given transaction type not informed, then return error 400', () => {
        request.body.transactionType = null;
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given transaction type not informed, then return error message', () => {
        request.body.transactionType = null;
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given type not informed, then return error 400', () => {
        request.body.type = null;
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given type not informed, then return error message', () => {
        request.body.type = null;
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given type is not income or expense, then return error 400', () => {
        request.body.type = 'anyOtherType';
        validateCreateTransaction(request, response);

        expect(response._status).toEqual(400);
    })

    test('Given type is not income or expense, then return error message', () => {
        request.body.type = 'anyOtherType';
        validateCreateTransaction(request, response);

        expect(response._json).toBeInstanceOf(BadRequestError);
    })

    test('Given transaction is valid, then go to next step', () => {
        let hasCalledNext = false;
        const next = () => {hasCalledNext = true;}

        validateCreateTransaction(request, response, next);

        expect(hasCalledNext).toBeTruthy();
    })

    class ResponseMock {
        _json;
        _status;
        json(value) {
            this._json = value;
        }
        status(value){
            this._status = value;
            return this;
        }
    }

})