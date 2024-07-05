import { expect, describe, it } from 'vitest';
import { getDialTime, getJupiterianHourName } from '../modules/coordonisteTime';

describe('get day moment according to the Jupiterian Hour', () => {
  describe('Mortin Time', () => {
    it('should return "mortin" when all dials are at 0', () => {
      expect(getJupiterianHourName(0)).toBe('mortin');
    });
    it('should return "mortin" when all dials are at 1', () => {
      expect(getJupiterianHourName(1)).toBe('mortin');
    });
    it('should return "mortin" when all dials are at 2', () => {
      expect(getJupiterianHourName(2)).toBe('mortin');
    });
  }
  )
  describe('Aprenoon Time', () => {
    it('should return "aprenoon" when all dials are at 3', () => {
      expect(getJupiterianHourName(3)).toBe('aprenoon');
    });
    it('should return "aprenoon" when all dials are at 4', () => {
      expect(getJupiterianHourName(4)).toBe('aprenoon');
    });
  }
  )
  describe('Soirning Time', () => {
    it('should return "soirning" when all dials are at 5', () => {
      expect(getJupiterianHourName(5)).toBe('soirning');
    });
  }
  )
  describe('Nuight Time', () => {
    it('should return "nuight" when all dials are at 6', () => {
      expect(getJupiterianHourName(6)).toBe('nuight');
    });
  }
  )
})

describe('Dial Jupiterienne Time', () => {

  describe('Mortin Time', () => {
    it('should return "mortin" when all dials are at 1', () => {
      expect(getDialTime(1, 1, 1)).toBe(0);
    });

    it('should return "mortin" when moon is 1, earth is 2, sun is 1', () => {
      expect(getDialTime(1, 2, 1)).toBe(0);
    });
    it('should return "mortin" when moon is 2, earth is 1, sun is 1', () => {
      expect(getDialTime(2, 1, 1)).toBe(1);
    });
    it('should return "mortin" when moon is 2, earth is 1, sun is 1', () => {
      expect(getDialTime(2, 2, 1)).toBe(1);
    });
  });

  describe('Aprenoon Time', () => {
    it('should return "aprenoon" when moon is 2, earth is 1, sun is 2', () => {
      expect(getDialTime(2, 1, 2)).toBe(4);
    });
  });

  describe('Soirning Time', () => {
    it('should return "soirning" when moon is 1, earth is 2, sun is 2', () => {
      expect(getDialTime(1, 1, 2)).toBe(5);
    });

  });

  describe('Nuight Time', () => {
    it('should return "nuight" when moon is 1, earth is 2, sun is 2', () => {
      expect(getDialTime(1, 2, 2)).toBe(6);
    });
    it('should return "nuight" when moon is 2, earth is 2, sun is 2', () => {
      expect(getDialTime(2, 2, 2)).toBe(6);
    });
  });
})
