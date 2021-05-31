class Koki {
  constructor() {
    this.tools = 'pisau';
    this.skills = ['memasak', 'memotong', 'membakar'];
  }

  info() {
    console.log('Halo, saya adalah seorang Koki profesional !');
  }
}

// module.exports = Koki; 											// melakukan export class Koki dengan format CommonJS
export default Koki; 												// melakukan export class Koki dengan format ES6