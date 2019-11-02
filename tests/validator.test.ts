import { StringValidator } from '../src/StringValidator';
import { ZipCodeValidator } from '../src/ZipCodeValidator';
import { PasswordValidator } from '../src/PasswordValidator';
import { expect } from 'chai';
import 'mocha';

describe('Test ZipCodeValidator',
  () => {
    it('12345 should return true', () => {
      const validator = new ZipCodeValidator();
      const result = validator.isAcceptable('12345');
      expect(result).to.equal(true);
    });
    it('1234 should return false', () => {
      const validator = new ZipCodeValidator();
      const result = validator.isAcceptable('1234');
      expect(result).to.equal(false);
    });
    it('1234S should return false', () => {
      const validator = new ZipCodeValidator();
      const result = validator.isAcceptable('1234S');
      expect(result).to.equal(false);
    });
  });

  describe('Test PasswordValidator',
  () => {
    it('12345 should return false', () => {
      const validator = new PasswordValidator();
      const result = validator.isAcceptable('12345');
      expect(result).to.equal(false);
    });
    it('12346Test should return true', () => {
      const validator = new PasswordValidator();
      const result = validator.isAcceptable('12346Test');
      expect(result).to.equal(true);
    });
    it('12346test should return false', () => {
      const validator = new PasswordValidator();
      const result = validator.isAcceptable('12346test');
      expect(result).to.equal(false);
    });
    it('Test should return false', () => {
      const validator = new PasswordValidator();
      const result = validator.isAcceptable('Test');
      expect(result).to.equal(false);
    });
    it('TestTest should return false', () => {
      const validator = new PasswordValidator();
      const result = validator.isAcceptable('TestTest');
      expect(result).to.equal(false);
    });
  });