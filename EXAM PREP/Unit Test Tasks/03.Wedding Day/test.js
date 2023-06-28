let expect = require('chai').expect;
let weddingDay = require('./weddingDay');


describe('wedding Day', () => {
    it('pickVenue', () => {
        expect(() => { weddingDay.pickVenue(50, '100', 'Varna') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue('50', 100, 'Varna') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue('50', 100, '') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue('50', 100, []) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.pickVenue(50, 100, 'Sofia') }).to.throw('The location of this venue is not in the correct area!');
        expect(weddingDay.pickVenue(50, 100, 'Varna')).to.equal('This venue does not meet your requirements!');
        expect(weddingDay.pickVenue(160, 180, 'Varna')).to.equal('This venue does not meet your requirements!');
        expect(weddingDay.pickVenue(200, 100, 'Varna')).to.equal('This venue meets the requirements, with capacity of 200 guests and 100$ cover.');      
    });

    it('otherSpendings', () => {
        expect(() => { weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],'pictures', true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings('flowers',['pictures'], true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],'pictures', true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],['pictures'], 'true') }).to.throw('Invalid Information!');
        expect(weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],[], true)).to.equal('You spend 765$ for wedding decoration and photography whit 15% discount!'); 
        expect(weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],[], false)).to.equal('You spend 900$ for wedding decoration and photography!'); 
        expect(weddingDay.otherSpendings(['flowers'],['video'], true)).to.equal('You spend 1530$ for wedding decoration and photography whit 15% discount!'); 
        expect(weddingDay.otherSpendings([],['video','pictures'], true)).to.equal('You spend 1700$ for wedding decoration and photography whit 15% discount!'); 
        expect(weddingDay.otherSpendings([],['video','pictures'], false)).to.equal('You spend 2000$ for wedding decoration and photography!'); 
  
    });

    it('tableDistribution', () => {
        expect(() => { weddingDay.tableDistribution('5', '5') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(5, '5') }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution('5', 5) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(0, 5) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(5, -1) }).to.throw('Invalid Information!');
        expect(weddingDay.tableDistribution(50, 5)).to.equal('You have 5 tables with 10 guests on table.'); 
        expect(weddingDay.tableDistribution(100, 20)).to.equal('There is only 5 people on every table, you can join some tables.');        
    });

   
});