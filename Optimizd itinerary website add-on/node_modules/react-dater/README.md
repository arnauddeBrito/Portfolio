# react-dater

> A simple datepicker for react

[![NPM](https://img.shields.io/npm/v/react-dater.svg)](https://www.npmjs.com/package/react-dater) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![dependencies Status](https://david-dm.org/chih-hsi-chen/react-dater/status.svg)](https://david-dm.org/chih-hsi-chen/react-dater) [![Build Status](https://travis-ci.org/chih-hsi-chen/react-dater.svg?branch=master)](https://travis-ci.org/chih-hsi-chen/react-dater)

## Install

```bash
npm install --save react-dater
```

## Usage

```jsx
import React, { Component } from 'react';

import DatePicker from 'react-dater';
import 'react-dater/dist/index.css';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <DatePicker
        onChange = {(newDate) => this.setState({ date: newDate })}
      />
    );
  }
}
```

## Props

### showMonthYearSeparate - (boolean)

If true, it will show current month and year separately with their own prev/next buttons.

### dateFormatCalendar - (string)
The format of header of calendar, the default value is `LLL yyyy`.

### dateFormatInput - (string)
The format of value in input field (or your custom input component).
Default value is `MM/dd/yyyy`.

### onChange - (function)
This function will be invoked when some date is selected.
Default value is a dummy arrow function.

### selected - (Date object)
When this prop is set, the calendar will first use its value as currently selected date.

### locale - (Locale object)
We have `date-fns` as dependency, so you can import the locale object from it.
If not provided, the default locale is en-US.

**Here is example**

```jsx
import { enGB } from 'date-fns/locale';
...
...
class Example extends Component {
    ...
    render() {
        return (
          <DatePicker
            locale = {enGB}
          />
        );
    }
}
```

## Browser Support

PopperJS can support modern versions of Chrome, Firefox, Safari and Edge. However, it cannot directly support IE11 or IE9. Therefore, we can add some polyfills to make it work without errors.

There are two solutions to add polyfills:

### Create-React-App

If you use Create-React-App and want to support IE11 or IE9, you can use [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill)

**IE11**

```jsx
// These two must be top in src/index.js
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
```

**IE9**

```jsx
// These two must be top in src/index.js
import 'react-app-polyfill/stable';
// this also includes ie11, so you don't have to include ie11 additionally.
import 'react-app-polyfill/ie9';
```

### Add script tag

Add following script tag before your bundled js files:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find,Promise,Object.assign"></script>
```

## License

MIT © [chih-hsi-chen](https://github.com/chih-hsi-chen)