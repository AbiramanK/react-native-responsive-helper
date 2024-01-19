# react-native-responsive-helper

React Native Responsive Helper provides responsive sizes for responsive UI design

## Installation

```sh
npm install react-native-responsive-helper
```

## Usage

```js
import { responsiveSize,responsiveHeight } from 'react-native-responsive-helper';

// ...
const styles = StyleSheet.create({
    ...
    text: {
        ...
        fontSize: responsiveSize(21),
        height: responsiveHeight(100),
        ...
    }
    ...
})
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
