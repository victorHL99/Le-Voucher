
import voucherRepository from "../../src/repositories/voucherRepository.js"
import voucherService from "../../src/services/voucherService.js"

import { jest } from "@jest/globals";

/* describe("voucherService test suite", () => {
  it("should be always very positive", () => {
    expect("didi").toBe("didi");
  })
})
 */
const code:string = "teste123";
const discount:number = 10;

describe("VoucherService Test createVoucher", ()=>{
  it("should create a voucher", async ()=>{
    jest.spyOn(voucherRepository, "getVoucherByCode").mockImplementation(():any => {return null})
    jest.spyOn(voucherRepository, "createVoucher").mockImplementation(():any => { return { code: "teste123", discount: 10 }})

    expect(voucherRepository.getVoucherByCode(code)).toBeNull();
    expect(voucherRepository.createVoucher(code, discount)).toStrictEqual({ code: "teste123", discount: 10 });
    /* const result = await voucherRepository.createVoucher(code, discount);
    console.log(result);
    console.log(voucherService.createVoucher(code, discount)) */
    expect(voucherService.createVoucher(code, discount)).toBeNull();
  });
})