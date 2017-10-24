
import {expect} from "chai";
import {fetchThreadsRequest} from "../actions/threads.js"

describe("action creators",() => {
    describe("FETCH_THREADS_REQUEST",() => {
        it("creates a new object",() => {
            const newThread = fetchThreadsRequest();
            expect(newThread).to.be.an("object");
        })
    })
    describe("FETCH_THREADS_SUCCESS",() => {
        it("creates a new object",() => {
            const newThread = fetchThreadsRequest();
            expect(newThread).to.be.an("object");
        })
    })
    describe("FETCH_THREADS_FAILURE",() => {
        it("creates a new object",() => {
            const newThread = fetchThreadsRequest();
            expect(newThread).to.be.an("object");
        })
    })
})