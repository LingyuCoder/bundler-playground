const obj = () => ({
  ac: 123,
  get doubledValues() {
    console.log(this, ' this');
    return [1].map(v => {
      console.log(this, 'xaaa');
      return v;
    });
  },
  tt() {
    this.ac = this.doubledValues;
  }
});
const a = obj();
a.tt();