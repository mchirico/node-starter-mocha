import "mocha";
import { expect } from "chai";
import { promises } from "fs";
import { Log } from "../src";

describe("Example ...", function() {
  beforeEach(async function() {
    await promises.unlink("./dlogger.txt").catch(e => {
      console.log("e: " + e.message);
    });
  });

  afterEach(async function() {
    await promises.unlink("./dlogger.txt").catch(e => {
      console.log("e: " + e.message);
    });
  });

  it("downloads and extracts linux version", async function() {
    const log = new Log();
    await log.log("test");
    const result = await log.read();
    expect(result).to.contain("test");
  });
});
