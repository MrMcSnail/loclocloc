const {updateRemoteStudents} = require('../location.js');

describe('updateRemoteStudents()', () => {
  test('should return a new array', () => {
    // arrange
    const originalArr = [
      {name: 'Hypatia', age: 31, location: 'leeds'},
      {name: 'Ramanujan', age: 22, location: 'remote'},
      {name: 'Tao', age: 47, location: 'manchester'},
    ];

    // act
    const returnedArr = updateRemoteStudents(originalArr);

    // assert
    expect(returnedArr).toBeInstanceOf(Array);
    expect(returnedArr).not.toBe(originalArr);
  });
  test('should not mutate the original array', () => {
    // arrange
    const originalArr = [
      {name: 'Hypatia', age: 31, location: 'leeds'},
      {name: 'Ramanujan', age: 22},
      {name: 'Tao', age: 47, location: 'manchester'},
    ];
    // act
    updateRemoteStudents(originalArr);
    // assert
    expect(originalArr).toEqual([
      {name: 'Hypatia', age: 31, location: 'leeds'},
      {name: 'Ramanujan', age: 22},
      {name: 'Tao', age: 47, location: 'manchester'},
    ]);
  });
  test('should not mutate objects within the original array', () => {
    // arrange
    const originalArr = [
      {name: 'Hypatia', age: 31, location: 'leeds'},
      {name: 'Ramanujan', age: 22},
      {name: 'Tao', age: 47, location: 'manchester'},
    ];
    // act
    const returnedArr = updateRemoteStudents(originalArr);
    // assert
    for (let i = 0; i < returnedArr.length; i++) {
      expect(returnedArr[i]).not.toBe(originalArr[i]);
    };
  });
  test('when passed one Northcoder object with location, it should return a new array with unchanged Northcoder object', () => {
    // arrange
    const originalArr = [
      {name: 'Hypatia', age: 31, location: 'leeds'},
    ];
    // act
    const returnedArr = updateRemoteStudents(originalArr);
    // assert
    expect(returnedArr).toEqual([
      {name: 'Hypatia', age: 31, location: 'leeds'},
    ]);
  });
  test('when passed one Northcoder object with no location property, it should return a new array containing an updated Northcoder object', () => {
    // arrange
    const originalArr = [
      {name: 'Ramanujan', age: 22},
    ];
    // act
    const returnedArr = updateRemoteStudents(originalArr);
    // assert
    expect(returnedArr).toEqual([
      {name: 'Ramanujan', age: 22, location: 'remote'},
    ]);
  });
  test('when passed an array containing more than one Northcoder object, it should return a **new array**, where all objects that were missing a `location` have been updated to a value of `"remote"`', () => {
    const originalArr = [
      {name: 'Hypatia', age: 31, location: 'leeds'},
      {name: 'Ramanujan', age: 22},
      {name: 'Tao', age: 47, location: 'manchester'},
    ];

    const updatedArr = [
      {name: 'Hypatia', age: 31, location: 'leeds'},
      {name: 'Ramanujan', age: 22, location: 'remote'},
      {name: 'Tao', age: 47, location: 'manchester'},
    ];
    // act
    const returnedArr = updateRemoteStudents(originalArr);

    // assert
    expect(returnedArr).toEqual(updatedArr);
  });
});
