# Testing Homework

This project is an ESLint configuration that fixes all the issues with the existing source that was provided.

## What to test

- **Clamp Function**: Verify that the function returns the correct value by clamping inputs below minimum and above minimum.

- **ForEach Function**: Use a spy to verify when and how the callback is invoked for each array element.

- **QueryNetwork Function**: Mock the fetch dependency to simulate a network call that resolves into an object (with a status field and a json method) and confirm the function correctly unwraps using the json method.

- Add code coverage to see how much of my code was covered in the tests.

## Instructions

1. Clone the repository

```bash
git clone https://github.com/jambalong/homework03
```

2. Change directory

```bash
cd homework03/
```

3. Install dependencies

```bash
npm install
```

4. Run ESLint script

```bash
npm run test
```

## Notes

For security updates, run:

```bash
npm audit fix
```

## Output

All test suites should pass. (clamp, forEach, and queryNetwork)
Code coverage reports shows everything in `src/` is covered.
