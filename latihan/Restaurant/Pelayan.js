class Pelayan {
  constructor() {
    this.tools = 'catatan';
    this.skills = ['melayani', 'berbicara', 'mengingat'];
  }

  info() {
    console.log('Halo, saya adalah seorang Pelayan yang handal !');
  }
}

// module.exports = Pelayan;											// melakukan export class Pelayan dengan format CommonJS
export default Pelayan;												// melakukan export class Pelayan dengan format ES6