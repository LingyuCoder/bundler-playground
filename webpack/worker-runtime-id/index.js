import module from "./module";

it("should not dispose shared modules when a chunk from a different runtime is removed", done => {
  import("./chunk1").then(chunk1 => {
    import.meta.webpackHot.accept("./module", async () => {
      expect(module).toBe(42);
      expect(chunk1).toMatchObject({
        active: true
      });
      done();
    });
  }, done);
});
