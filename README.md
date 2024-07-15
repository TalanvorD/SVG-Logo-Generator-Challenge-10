
# SVG Logo Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Using the inquirer package to prompt a series of questions from the user to generate a simple SVG Logo.

That SVG logo needs 4 elements:
  - Up to 3 alphanumeric characters
  - A color for those characters, entered by name or hexadecimal value
  - A background shape, this will utilize a list input option between 3 values: Circle, Triangle and Square.
  - A color for that background shape, entered by name or hexadecimal value

Once all of the prompts have been answered a logo.svg file will be written with fs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Repository](#repository)

## Installation

No installation required.

## Usage

Runs directly from the CLI: node index.js

## License

[MIT License](https://spdx.org/licenses/MIT.html)

## Contributing

No contributions allowed at this time.

## Tests
  - Jest testing on the class constructors for Shapes and its subclasses (Circle, Triangle and Square).
  - Validation if the user tries to enter more than 3 alphanumeric characters.
  - Validation of the colors entered by the user. First if it's a color keyword then a regex matcher to check for a hexadecimal value.
  - Error checking to ensure fs.writeFile is working properly.

## Questions

For any questions:

Find me on [github](https://github.com/talanvord)!

Send me an [email](mailto://talanvor_divine@yahoo.com)!

## Repository

[https://github.com/TalanvorD/SVG-Logo-Generator-Challenge-8](https://github.com/TalanvorD/SVG-Logo-Generator-Challenge-8)

## Screenshot and Video link

Screenshot

![screenshot](https://raw.githubusercontent.com/TalanvorD/SVG-Logo-Generator-Challenge-8/main/SVG-screenshot.jpg)

Video

[https://drive.google.com/file/d/1-MesnGibuXYwbGrk_S_6FZ2n5vATWobE/view?usp=sharing](https://drive.google.com/file/d/1-MesnGibuXYwbGrk_S_6FZ2n5vATWobE/view?usp=sharing)
