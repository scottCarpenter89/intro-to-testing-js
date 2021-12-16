// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello('5')).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when 5 is entered', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when "5" is entered', function () {
        expect(isFive('5')).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true if the input is 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true if the input is -2', function () {
        expect(isEven(-2)).toBe(true);
    });
    it('should return false if the input is 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false if the input is "banana"', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true if the input is "8"', function () {
        expect(isEven('8')).toBe(true);
    });
    it('should return false if the input is Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false if the input is Infinity', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean if called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if the input is "a"', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true if the input is "y"', function () {
        expect(typeof isVowel('')).toBe(true);
    });
    // it('should return a boolean if called', function () {
    //     expect(typeof isVowel()).toBe('boolean');
    // });
    // it('should return a boolean if called', function () {
    //     expect(typeof isVowel()).toBe('boolean');
    // });
    // it('should return a boolean if called', function () {
    //     expect(typeof isVowel()).toBe('boolean');
    // });
    // it('should return a boolean if called', function () {
    //     expect(typeof isVowel()).toBe('boolean');
    // });
});